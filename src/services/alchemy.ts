import { AlchemyWeb3, createAlchemyWeb3 } from "@alch/alchemy-web3";
import { AbiItem } from "web3-utils";
import { log } from "./logger";
import abi from "./erc721abi.json";
import dotenv from "dotenv";
dotenv.config();

const { ALCHEMY_API_KEY } = process.env;

export class Alchemy {
  web3: AlchemyWeb3 = createAlchemyWeb3(
    `wss://eth-mainnet.ws.alchemyapi.io/ws/${ALCHEMY_API_KEY}`,
    {
      retryInterval: 1000,
      maxRetries: 25,
    }
  );

  // Milady token address
  contractAddress: string = "0x5af0d9827e0c53e4799bb226655a1de152a425a5";
  //new (alchemy as any)()
  // as AlchemyWeb3["eth"]["Contract"]
  contract = new this.web3.eth.Contract(abi as AbiItem[], this.contractAddress);

  init = () => {
    log.info("Initializing Alchemy");
    this.contract.events.Transfer(async (err: any, event: any) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("Transfer");
      console.log(event);
    });
  };
  //   log.info("Adding contract event listener");
  //   contract.events.allEvents(async (err: any, event: any) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }

  //     console.log("All events", event);
  //   });
}
