import { Client, Collection, ClientOptions } from "discord.js";

export interface CustomClientOptions extends ClientOptions {
    commands: Collection<string, any>;
}

export interface CustomClient extends Client {
    commands: Collection<string, any>;
}

type NFTStandards = "ERC721" | "ERC1155";

interface Attribute {
    value: string;
    trait_type: string;
}

export interface NftMetadata {
    contract: {
        address: string;
    };
    id: {
        tokenId: string;
        tokenMetadata: {
            tokenType: NFTStandards;
        };
    };
    // NFT name
    title: string;
    // NFT Collection description
    description: string;
    // Token data
    tokenUri: {
        raw: string;
        gateway: string;
    };
    // Images
    media: [
        {
            raw: string;
            gateway: string;
        }
    ];
    metadata: {
        name: string;
        description: string;
        image: string;
        attributes: Attribute[];
    };
    // Date in ISO format
    timeLastUpdated: string;
}
