import { AlchemyWeb3, createAlchemyWeb3 } from "@alch/alchemy-web3";
import { AbiItem } from "web3-utils";
import { Logger } from "tslog";
import { MessageEmbedOptions } from "discord.js";
import abi from "./erc721abi.json";
import dotenv from "dotenv";
import axios, { AxiosRequestConfig } from "axios";
import { Transaction } from "web3-core";
import { NftMetadata } from "@src/types";
dotenv.config();

const { ALCHEMY_API_KEY, DISCORD_WEBHOOK_URL } = process.env;

const log: Logger = new Logger();

type TransferEvent = {
    address: string;
    blockNumber: number;
    transactionHash: string;
    blockHash: string;
    removed: boolean;
    id: string;
    returnValues: {
        from: string;
        to: string;
        tokenId: string;
    };
    event: string;
    signature: string;
};

export class Alchemy {
    // client: CustomClient = client;

    web3: AlchemyWeb3 = createAlchemyWeb3(`wss://eth-mainnet.ws.alchemyapi.io/ws/${ALCHEMY_API_KEY}`, {
        retryInterval: 1000,
        maxRetries: 25,
    });

    // Milady token address
    contractAddress = "0x5af0d9827e0c53e4799bb226655a1de152a425a5";
    contract = new this.web3.eth.Contract(abi as AbiItem[], this.contractAddress);

    transferCallback = async (event: TransferEvent) => {
        const tx = await this.web3.eth.getTransaction(event.transactionHash);

        const nftMetadata = await getNftMetadata(this.contractAddress, event.returnValues.tokenId);

        const imageURL = getImageURL(nftMetadata);

        const data = generateEmbed(event, tx, imageURL);

        postToWebhook(data);
    };

    init = async () => {
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

export const postToWebhook = async (data: string) => {
    const config: AxiosRequestConfig = {
        method: "POST",
        url: DISCORD_WEBHOOK_URL,
        headers: { "Content-Type": "application/json" },
        data,
    };

    const result = await axios(config);

    return result;
};

const generateEmbed = (event: TransferEvent, transaction: Transaction, image?: string): string => {
    return JSON.stringify({
        embeds: [
            {
                title: "Transfer",
                description: `${event.returnValues.from} transferred ${event.returnValues.tokenId} to ${
                    event.returnValues.to
                } **[${Number(transaction.value) / 1e18} ETH]**`,
                image: {
                    url: image,
                },
                color: 16757575,
                footer: {
text: `Tx: ${event.transactionHash}`
                },
                timestamp: new Date()
            },
        ] as MessageEmbedOptions[],
    });
};

const getNftMetadata = async (contractAddr: string, tokenId: string, tokenType?: string): Promise<NftMetadata> => {
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}/getNFTMetadata`;

    tokenType = tokenType || "ERC721";
    const config: AxiosRequestConfig = {
        method: "GET",
        url: `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}&tokenType=${tokenType}`,
        headers: {},
    };

    const result = await axios(config);

    return result.data;
};

const getImageURL = (nftMetadata: NftMetadata) => {
    return nftMetadata.metadata.image;
};
