import { Client } from "discord.js";
import { Logger } from "tslog";

module.exports = async (client: Client) => {
    const log: Logger = new Logger();
    log.info(`Logged in as ${client.user!.tag}!`);

    client.user!.setPresence({
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
};
