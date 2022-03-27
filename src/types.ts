import { Client, Collection, ClientOptions } from "discord.js";

export interface CustomClientOptions extends ClientOptions {
    commands: Collection<string, any>;
}

export interface CustomClient extends Client {
    commands: Collection<string, any>;
}
