import { Snowflake } from "discord.js";

export interface Config {
  guildId: Snowflake;
  mainVoiceChannelIds: Set<Snowflake>;
  newVoiceChannelSuffix: string;
  maxVoiceChannelCount: number;
}
