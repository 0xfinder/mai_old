import { Client } from "discord.js";
import { readdirSync } from "fs";

module.exports = async (client: Client) => {
    const events = readdirSync("./src/events/");
    for (const event of events) {
        const file = await import(`../events/${event}`);
        client.on(event.split(".")[0], (...args) => file(client, ...args));
    }
};
