import { gcodeToChunks, getCsrfToken, getGcodeRunDurationMs } from "./util";

export class GcodeCommand {
  private gcode: string;
  private chunks: string[][];
  private chunkMaxDurationMs: number | null;
  private chunkBleedMs: number;
  private currentChunkIndex: number;
  private currentChunkStartedAt: number | null;
  private lastPlayedChunkIndex: number;
  public state: "PAUSED" | "PLAYING" | "FINISHED";

  public get durationMs() {
    return this.chunks.reduce(
      (acc, chunk) =>
        acc + getGcodeRunDurationMs(chunk.join("\n")) + this.chunkBleedMs,
      0
    );
  }
  public get progressMs() {
    if (this.currentChunkStartedAt == null) {
      return 0;
    }
    const currentChunkDuration = getGcodeRunDurationMs(
      this.chunks[this.currentChunkIndex].join("\n")
    );
    return (
      this.currentChunkIndex * this.chunkBleedMs +
      this.currentChunkIndex * currentChunkDuration +
      (Date.now() - this.currentChunkStartedAt)
    );
  }

  constructor(gcode: string, chunkMaxDurationMs: number | null = 1000) {
    this.gcode = gcode;
    this.chunks =
      chunkMaxDurationMs == null
        ? [[gcode]]
        : gcodeToChunks(gcode, chunkMaxDurationMs);
    this.chunkMaxDurationMs = chunkMaxDurationMs;
    this.chunkBleedMs = 200;

    this.currentChunkIndex = 0;
    this.currentChunkStartedAt = null;
    this.lastPlayedChunkIndex = -1;

    this.state = "PAUSED";
  }

  private async playChunk(chunkIndex: number) {
    if (chunkIndex >= this.chunks.length) {
      this.state = "FINISHED";
      return;
    }
    const chunk = this.chunks[chunkIndex];

    if (!chunk) {
      throw new Error(
        "Invalid chunk index. This should never happen since we JUST checked for the length of the chunks array."
      );
    }
    this.currentChunkIndex = chunkIndex;
    this.lastPlayedChunkIndex = chunkIndex;
    this.currentChunkStartedAt = Date.now();

    await this.queueGcodeToGetExecuted(chunk);
  }

  private async queueGcodeToGetExecuted(gcode: string | string[]) {
    const rawCommands: string[] =
      typeof gcode === "string"
        ? gcode.split("\n")
        : gcode.flatMap((i) => i.split("\n"));

    const commands: string[] = rawCommands
      .map((i) => i.trim())
      .filter((i) => i !== "");

    const res = await fetch("/api/printer/command", {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "content-type": "application/json; charset=UTF-8",
        "x-csrf-token": getCsrfToken(),
      },
      body: JSON.stringify({
        commands,
        parameters: {},
      }),
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("Failed to queue gcode commands.");
    }
  }

  public goToBeginning() {
    this.currentChunkIndex = 0;
    this.lastPlayedChunkIndex = -1;
  }

  public pause() {
    this.state = "PAUSED";
  }

  public unpause() {
    this.state = "PLAYING";

    if (this.lastPlayedChunkIndex === -1) {
      this.playChunk(0);
    }
  }

  private shouldStartPlayingNextChunk() {
    if (this.state !== "PLAYING" || this.currentChunkStartedAt == null)
      return false;

    const elapsedTime = Date.now() - this.currentChunkStartedAt;
    const currentChunkDuration = getGcodeRunDurationMs(
      this.chunks[this.lastPlayedChunkIndex].join("\n")
    );

    return elapsedTime >= currentChunkDuration + this.chunkBleedMs;
  }

  public tick() {
    if (this.shouldStartPlayingNextChunk()) {
      this.playChunk(this.lastPlayedChunkIndex + 1);
    }
  }
}
