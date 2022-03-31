import { Client, Collection } from "discord.js";
import dotenv from "dotenv";
import { CustomClient, CustomClientOptions } from "./types";
dotenv.config();

const { TOKEN } = process.env;

export const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
    commands: new Collection(),
} as CustomClientOptions) as CustomClient;

client.login(TOKEN);

["command", "event"].forEach(async (handler) => {
    (await import(`./handlers/${handler}`))(client);
});
