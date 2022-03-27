import { AlchemyWeb3, createAlchemyWeb3 } from "@alch/alchemy-web3";
import { AbiItem } from "web3-utils";
import { log } from "./logger";
import abi from "./erc721abi.json";
import dotenv from "dotenv";
dotenv.config();

const { ALCHEMY_API_KEY } = process.env;

type TransferEvent = {
  address: string;
  blockNumber: number;
  transactionHash: string;
  transactionIndex: number;
  blockHash: string;
  logIndex: number;
  removed: boolean;
  id: string;
  returnValues: {
    from: string;
    to: string;
    tokenId: string;
  };
  event: string;
  signature: string;
  raw: {
    data: string;
    topics: string[];
  };
};

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

  transferCallback = async (event: TransferEvent) => {
    log.info(event);
  };

  init = () => {
    log.info("Adding contract event listener");
    this.contract.events.Transfer(async (err: any, event: TransferEvent) => {
      if (err) {
        console.error(err);
        return;
      }

      await this.transferCallback(event);
    });
  };
}
