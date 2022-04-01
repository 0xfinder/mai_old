import { readdirSync } from "fs";
import { CustomClient } from "../types";

export default async (client: CustomClient) => {
    // readdirSync("./src/commands/").forEach(async (dir) => {
    //     let commands = readdirSync(`./src/commands/${dir}/`).filter((file) => file.endsWith(".ts"));
    //     commands = commands.map((file) => file.replace(".ts", ""));

    //     for (const command of commands) {
    //         const pull = await import(`../commands/${dir}/${command}`);

    //         // if (pull.name) {
    //         client.commands.set(pull.name, pull);
    //         //     table.addRow(file, "✅");
    //         // } else {
    //         //     table.addRow(
    //         //         file,
    //         //         "❎ -> missing a help.name, or help.name is not a string.",
    //         //     );
    //         //     continue;
    //         // }

    //         // if (pull.aliases && Array.isArray(pull.aliases))
    //         //     pull.aliases.forEach((alias) =>
    //         //         client.aliases.set(alias, pull.name),
    //         //     );
    //     }
    // });
    console.log("wip");
};
