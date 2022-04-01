import { Client } from "discord.js";
import { Logger } from "tslog";

export default async (client: Client): Promise<void> => {
    const log: Logger = new Logger();
    if (!client.user || !client.application) {
        return;
    }

    log.info(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        activities: [
            {
                name: `your mom`,
                type: "STREAMING",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
        ],
        status: "online",
    });

    // Start services
    await import("../start-manager");
};
