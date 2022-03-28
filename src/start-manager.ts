import { Alchemy } from "./services/index";
import { Logger } from "tslog";

const log: Logger = new Logger();

async function start(): Promise<void> {
    const alchemy = new Alchemy();
    await alchemy.init();
}

start().catch((error) => {
    log.error(error);
});
