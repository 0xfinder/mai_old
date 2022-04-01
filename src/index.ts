import { Client, Collection } from "discord.js";
import { Logger } from "tslog";
import { CustomClient, CustomClientOptions } from "@src/types";
import dotenv from "dotenv";
dotenv.config();

const log: Logger = new Logger();

const { TOKEN } = process.env;

export const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
    commands: new Collection(),
} as CustomClientOptions) as CustomClient;

client.login(TOKEN);

log.info("Loading handlers");
["command", "event"].forEach(async (handler) => {
    let Handler = await import(`./handlers/${handler}`);
    Handler = Handler.default;
    Handler(client);
});
