import { readdirSync } from "fs";
import { CustomClient } from "../types";

module.exports = (client: CustomClient) => {
    readdirSync("./src/commands/").forEach(async (dir) => {
        const commands = readdirSync(`./src/commands/${dir}/`).filter((file) => file.endsWith(".ts"));

        for (const file of commands) {
            const pull = await import(`../commands/${dir}/${file}`);

            // if (pull.name) {
            client.commands.set(pull.name, pull);
            //     table.addRow(file, "✅");
            // } else {
            //     table.addRow(
            //         file,
            //         "❎ -> missing a help.name, or help.name is not a string.",
            //     );
            //     continue;
            // }

            // if (pull.aliases && Array.isArray(pull.aliases))
            //     pull.aliases.forEach((alias) =>
            //         client.aliases.set(alias, pull.name),
            //     );
        }
    });
};
