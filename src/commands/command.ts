import { RateLimiter } from "discord.js-rate-limiter";
import { ChatInputApplicationCommandData, CommandInteraction, PermissionString } from "discord.js";
import { CustomClient } from "@src/extensions/index";

export interface Command {
    metadata: ChatInputApplicationCommandData;
    cooldown?: RateLimiter;
    deferType: CommandDeferType;
    requireDev: boolean;
    requireGuild: boolean;
    requireClientPerms: PermissionString[];
    requireUserPerms: PermissionString[];
    execute(intr: CommandInteraction, client?: CustomClient): Promise<void>;
}

export enum CommandDeferType {
    PUBLIC = "PUBLIC",
    HIDDEN = "HIDDEN",
    NONE = "NONE",
}
