# Discord Dynamic Voice Channels Bot

[![Discord](https://discord.com/api/guilds/258167954913361930/embed.png)](https://discord.gg/WjEFnzC) [![Twitter Follow](https://img.shields.io/twitter/follow/peterthehan.svg?style=social)](https://twitter.com/peterthehan)

A Discord bot that dynamically creates and deletes voice channels as needed.

<div align="center">
  <img
    src="https://raw.githubusercontent.com/peterthehan/discord-dynamic-voice-channels-bot/master/assets/demo.gif"
    alt="demo"
  />
</div>

## Setup

1. Follow the instructions in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

   > Don't forget to give your bot the `Manage Channels` and `Move Members` permissions!

2. Download this bot and move the `src-discord-dynamic-voice-channels-bot` folder into the [/src/bots](https://github.com/peterthehan/create-discord-bot/tree/master/src/bots) folder from step 1.

3. Open [config.json](./src-discord-dynamic-voice-channels-bot/config.json) to configure your own settings:

   ```json
   [
     {
       "guildId": "258167954913361930",
       "mainVoiceChannelIds": ["618571553591787554", "266523094015934465"],
       "newVoiceChannelSuffix": "🤖",
       "maxVoiceChannelCount": 5
     }
   ]
   ```

   Add as many rules as you want to configure for other servers.

   - `guildId` is the server id.
   - `mainVoiceChannelIds` are the voice channel ids the bot watches for users when creating cloned voice channels.
   - `newVoiceChannelSuffix` is the string appended to the name of the cloned voice channel. Make sure this string is unique among your voice channels, the bot matches against this string when determining which voice channels to delete when they're no longer in use!
   - `maxVoiceChannelCount` is the max number of cloned voice channels the bot will create.

4. `npm start` to run the bot.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discord.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
