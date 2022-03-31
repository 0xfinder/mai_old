import { Client } from "discord.js";
import { Logger } from "tslog";

export default async (client: Client): Promise<void> => {
    const log: Logger = new Logger();
    // client.on("ready", async () => {
    if (!client.user || !client.application) {
        return;
    }

    log.info(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        activities: [
            {
                name: `with ${client.guilds.cache.size.toLocaleString()} Miladies`,
                type: "PLAYING",
            },
        ],
        status: "online",
    });

    // Start services
    await import("../start-manager");
    // });
};
