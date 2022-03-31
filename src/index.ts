import { Client, Collection } from "discord.js";
import { Logger } from "tslog";
import { CustomClient, CustomClientOptions } from "./types";
import { CommandHandler, EventHandler } from "./handlers/index";
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
CommandHandler(client);
EventHandler(client);
