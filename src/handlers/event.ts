import { Client } from "discord.js";
import { readdirSync } from "fs";

export default async (client: Client) => {
    const events = readdirSync("./src/events/").map((event) => event.replace(".ts", ""));
    for (const event of events) {
        let file = await import(`../events/${event}`);
        file = file.default;
        client.on(event, (...args) => file(client, ...args));
    }
};
