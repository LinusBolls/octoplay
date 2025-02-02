# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function, unicode_literals

__license__ = "GNU Affero General Public License http://www.gnu.org/licenses/agpl.html"
__copyright__ = "Copyright (C) 2020 The OctoPrint Project - Released under terms of the AGPLv3 License"

from flask_babel import gettext

import octoprint.plugin
from octoprint.events import Events

class OctoplayPlugin(
    octoprint.plugin.AssetPlugin,
    octoprint.plugin.TemplatePlugin,
    octoprint.plugin.SettingsPlugin,
    octoprint.plugin.EventHandlerPlugin,
):
    def on_event(self, event):
        if event == Events.PRINT_DONE or event == Events.PRINT_CANCELLED:
            print("moin")
            
    def get_assets(self):
        js = [
            "js/index.js",
        ]

        return {
            "js": js,
        }

    def get_template_configs(self):
        return [
            {
                "type": "tab",
                "template": "octoplay_tab.jinja2",
                "div": "midi",
                "styles": ["display: none;"],
                "data_bind": "visible: loginState.hasAllPermissionsKo(access.permissions.GCODE_VIEWER, access.permissions.FILES_DOWNLOAD)",
                "name":"Octoplay",
            },
            {
                "type": "settings",
                "template": "octoplay_settings.jinja2",
                "custom_bindings": True,
            },
        ]

    def get_settings_defaults(self):
        return {
            "mobileSizeThreshold": 2 * 1024 * 1024,  # 2MB
            "sizeThreshold": 20 * 1024 * 1024,  # 20MB
            "skipUntilThis": None,
        }

    def get_settings_version(self):
        return 1

    def on_settings_migrate(self, target, current):
        if current is None:
            config = self._settings.global_get(["cnc_gcodeViewer"])
            if config:
                self._logger.info(
                    "Migrating settings from gcodeViewer to plugins.gcodeviewer..."
                )
                if "mobileSizeThreshold" in config:
                    self._settings.set_int(
                        ["mobileSizeThreshold"], config["mobileSizeThreshold"]
                    )
                if "sizeThreshold" in config:
                    self._settings.set_int(["sizeThreshold"], config["sizeThreshold"])
                self._settings.global_remove(["cnc_gcodeViewer"])


__plugin_name__ = gettext("Octoplay")
__plugin_author__ = "Linus Bolls"
__plugin_description__ = "Play MIDI files on your printer's buzzer!"
__plugin_disabling_discouraged__ = gettext(
    "Pls don't uninstall haha 👉👈"
)
__plugin_license__ = "AGPLv3"
__plugin_pythoncompat__ = ">=2.7,<4"
__plugin_implementation__ = OctoplayPlugin()
# __plugin_hooks__ = {
# 	"octoprint.access.permissions": __plugin_implementation__.get_additional_permissions
# }
