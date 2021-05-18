const rules = require("../config");

module.exports = async (client) => {
  console.log("dynamicVoice: ready");

  client.dynamicVoiceRules = {};
  for (const rule of rules) {
    rule.mainVoiceChannelIds = new Set(rule.mainVoiceChannelIds);
    client.dynamicVoiceRules[rule.guildId] = rule;
  }
};
