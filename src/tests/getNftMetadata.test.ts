import axios, { AxiosRequestConfig } from "axios";
import { Logger } from "tslog";
import dotenv from "dotenv";
dotenv.config();

const log: Logger = new Logger();

const getNftMetadata = async (tokenId: string, contractAddr: string, tokenType?: string) => {
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}/getNFTMetadata`;

    tokenType = tokenType || "ERC721";
    const config: AxiosRequestConfig = {
        method: "GET",
        url: `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}&tokenType=${tokenType}`,
        headers: {},
    };

    const result = await axios(config);
    log.info(result);

    return result;
};

log.info(getNftMetadata("1", "0x5af0d9827e0c53e4799bb226655a1de152a425a5"));
