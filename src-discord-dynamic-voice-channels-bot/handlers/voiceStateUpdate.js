module.exports = async (oldState, newState) => {
  if (!(newState.guild.id in newState.guild.client.dynamicVoiceRules)) {
    return;
  }

  const rules = newState.guild.client.dynamicVoiceRules[newState.guild.id];

  if (
    oldState.channel &&
    oldState.channel.name.endsWith(rules.newVoiceChannelSuffix) &&
    oldState.channel.members.size === 0
  ) {
    await oldState.channel.delete();
  }

  if (
    rules.mainVoiceChannelIds.has(newState.channelID) &&
    newState.guild.channels.cache.filter(
      (channel) =>
        channel.type === "voice" &&
        channel.name.endsWith(rules.newVoiceChannelSuffix)
    ).size < rules.maxVoiceChannelCount
  ) {
    const newVoiceChannel = await newState.channel.clone({
      position: newState.channel.rawPosition,
      name: `${newState.channel.name} ${rules.newVoiceChannelSuffix}`,
    });
    await newState.setChannel(newVoiceChannel);
  }
};
