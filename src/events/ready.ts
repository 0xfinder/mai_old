import { Client } from "discord.js";
import { log } from "../services/index";

module.exports = (client: Client) => {
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
  const manager = require("../start-manager");
};
