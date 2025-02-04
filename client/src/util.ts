export const getGcodeRunDurationMs = (input: string) => {
  if (typeof input !== "string") {
    throw new Error("Invalid input");
  }
  const regex = /\sP(\d+)/g;
  let sum = 0;
  let match;

  while ((match = regex.exec(input)) !== null) {
    sum += parseInt(match[1], 10);
  }
  return sum;
};

function getCookie(name: string) {
  return (
    document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="))
      ?.split("=")[1] || ""
  );
}

export function getCsrfToken() {
  return getCookie("csrf_token_P80");
}

export const gcodeToChunks = (
  gcode: string,
  chunkMaxDurationMs = 1000
): string[][] => {
  if (typeof gcode !== "string") {
    throw new Error("Invalid input");
  }
  const commands = gcode.split("\n").filter((i) => i.trim() !== "");
  const chunks: string[][] = [];

  let chunk: string[] = [];
  let chunkDuration = 0;

  for (const command of commands) {
    const duration = getGcodeRunDurationMs(command);

    if (chunkDuration + duration > chunkMaxDurationMs) {
      chunks.push(chunk);
      chunk = [];
      chunkDuration = 0;
    }
    chunk.push(command);
    chunkDuration += duration;
  }
  if (chunk.length > 0) {
    chunks.push(chunk);
  }
  return chunks;
};

// from https://gist.github.com/YuxiUx/ef84328d95b10d0fcbf537de77b936cd
export const noteToFreq = (note: number): number => {
  let a = 440; //frequency of A (common value is 440Hz)
  return (a / 32) * 2 ** ((note - 9) / 12);
};

export function getHumanReadableDuration(durationMs: number): string {
  if (!isFinite(durationMs)) return "0s";
  if (durationMs < 1000) return `${(durationMs / 1000).toFixed(0)}s`;

  const seconds = Math.floor(durationMs / 1000) % 60;
  const minutes = Math.floor(durationMs / (1000 * 60)) % 60;
  const hours = Math.floor(durationMs / (1000 * 60 * 60));

  let parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}mins`);
  if (seconds > 0) parts.push(`${seconds}s`);

  return parts.join(" ") || "0s";
}

export function formatFileSize(bytes: number, decimals: number = 1): string {
  if (bytes === 0) return "0B";

  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const fileSize = bytes / Math.pow(1024, i);

  return `${parseFloat(fileSize.toFixed(decimals))}${sizes[i]}`;
}

export function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / (1000 * 60)) % 60;
  const hours = Math.floor(ms / (1000 * 60 * 60));

  const pad = (num: number) => num.toString().padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
