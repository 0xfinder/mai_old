import { Command, CommandDeferType } from "./command";
import { ChatInputApplicationCommandData, CommandInteraction, PermissionString } from "discord.js";

export default class GenerateCommand implements Command {
    public metadata: ChatInputApplicationCommandData = {
        name: "generate",
        description: "Generate a new contract",
    };
    public deferType = CommandDeferType.PUBLIC;
    public requireDev = true;
    public requireGuild = true;
    public requireClientPerms: PermissionString[] = [];
    public requireUserPerms: PermissionString[] = [];
    public async execute(intr: CommandInteraction): Promise<void> {
        intr.reply("wip");
    }
}
