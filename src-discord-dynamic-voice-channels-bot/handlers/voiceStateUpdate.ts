import { VoiceChannel, VoiceState } from "discord.js";
import { getConfig } from "../util/getConfig";

module.exports = async (
  oldState: VoiceState,
  newState: VoiceState
): Promise<void> => {
  const config = getConfig(newState.guild);
  if (!config) {
    return;
  }

  if (
    oldState.channel &&
    oldState.channel.name.endsWith(config.newVoiceChannelSuffix) &&
    oldState.channel.members.size === 0
  ) {
    await oldState.channel.delete();
  }

  if (
    newState.channel &&
    config.mainVoiceChannelIds.has(newState.channel.id) &&
    newState.guild.channels.cache.filter(
      (channel) =>
        channel.type === "GUILD_VOICE" &&
        channel.name.endsWith(config.newVoiceChannelSuffix)
    ).size < config.maxVoiceChannelCount
  ) {
    const newVoiceChannel = (await newState.channel.clone({
      position: newState.channel.rawPosition,
      name: `${newState.channel.name} ${config.newVoiceChannelSuffix}`,
    })) as VoiceChannel;

    await newState.setChannel(newVoiceChannel);
  }
};
