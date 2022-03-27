import { Client } from "discord.js";
import { readdirSync } from "fs";

module.exports = (client: Client) => {
    const events = readdirSync("./src/events/");
    for (const event of events) {
        const file = require(`../events/${event}`);
        client.on(event.split(".")[0], (...args) => file(client, ...args));
    }
};
