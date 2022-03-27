import { Client } from "discord.js";
import { log } from "../services/index";

module.exports = (client: Client) => {
  log.info(`Logged in as ${client.user!.tag}!`);

  const manager = require("../start-manager");
};
