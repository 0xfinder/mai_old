import { Client } from "discord.js";
import { readdirSync } from "fs";

interface eventToHandler {
    [key: string]: any;
}

const eventToHandlerMap: eventToHandler = {};

export const EventHandler = async (client: Client) => {
    let events = readdirSync("./src/events/");
    events = events.map((event) => event.replace(".ts", ""));
    for (const event of events) {
        let file = await import(`../events/${event}`);
        file = file.default;
        // eventToHandlerMap[event] = file;
        // file(client);
        client.on(event, (...args) => file(client, ...args));
        // client.on(event.split(".")[0], (...args) => file(client, ...args));
    }
};
