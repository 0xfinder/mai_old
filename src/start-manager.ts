import { Alchemy, log } from "./services/index";

async function start(): Promise<void> {
  const alchemy = new Alchemy();
  await alchemy.init();
}

start().catch(error => {
  log.error(error);
});
