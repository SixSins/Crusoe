# Crusoe

Crusoe is a Minecraft server wrapper written in JavaScript/Node.js. It has a user-friendly web interface similar to Minecraft Realms, but packs in a lot of features and flexibility that Realms doesn't offer.

I've only just begun to write Crusoe as a summer project. Hopefully, I'll complete release 1.0 by the end of summer.

## Features

Crusoe 1.0 will be considered "finished" and ready to release after I complete these features. This is what I consider to be my minimum viable product, or the core features that I believe Crusoe should have in order to be successful.

* Basic worlds management
  * Create new worlds (up to three to start)
  * Upload/download worlds
  * Wipe worlds/reset
  * Configure Minecraft version (stable only)
* Realms-like minigame functionality
  * Users can upload their own minigames
  * Wiped and reset easily
* Basic player management
  * Whitelist/ban player
  * Op/de-op players
  * Player lookup (a la namemc.com)
  * Basic user accounts
* Backups
  * On demand and on regular intervals
  * Write to disk or save to Dropbox, Drive, etc. (maybe save that for later)
* Web console
* Edit basic server settings
  * `server.properties` and other similar files
  * Edit Java cli arguments
* Automatic Crusoe updates

Once I release 1.0, I intend to look into features that I believe are important to communities, but are secondary to the core features decribed above.

* Snapshot support
* Discord bindings
  * Mirrors in-game chat to a Discord server and vice versa
* Edit server resources
  * Edit server resource pack, loot tables, advancements, and (hopefully in 1.13) crafting recipes
  * Smart editor with completion and user assistance
* Server statistics

At this point in time, I have no intentions of supporting non-vanilla servers.
