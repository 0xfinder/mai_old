import { Client } from "revolt.js";
import dotenv from "dotenv";
dotenv.config();

let client = new Client();

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

client.on("message", async (message) => {
    if (message.content === "hello") {
        message.channel.sendMessage("world");
    }
});

client.loginBot(process.env.token);