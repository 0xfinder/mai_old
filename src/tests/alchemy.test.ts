import { Alchemy } from "@src/services";
import * as alchemyService from "@src/services/alchemy";

const event = {
    address: "0x5Af0D9827E0c53E4799BB226655A1de152A425a5",
    blockNumber: 14499497,
    transactionHash: "0xe36d8f5534629777a2bd9a02320951ceb59ffc1b8c5ae2b5212a20ad43644cbb",
    transactionIndex: 73,
    blockHash: "0x19734d69fb59043c688e06f2f4bfeaef01f7b4a7dd2aa5b28522e5123f317009",
    logIndex: 135,
    removed: false,
    id: "log_06151db1",
    returnValues: {
        "0": "0xC7a669d0de21F1885361E95fDE3892534807b927",
        "1": "0x227c7DF69D3ed1ae7574A1a7685fDEd90292EB48",
        "2": "9500",
        from: "0xC7a669d0de21F1885361E95fDE3892534807b927",
        to: "0x227c7DF69D3ed1ae7574A1a7685fDEd90292EB48",
        tokenId: "9500",
    },
    event: "Transfer",
    signature: "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    raw: {
        data: "0x",
        topics: [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000c7a669d0de21f1885361e95fde3892534807b927",
            "0x000000000000000000000000227c7df69d3ed1ae7574a1a7685fded90292eb48",
            "0x000000000000000000000000000000000000000000000000000000000000251c",
        ],
    },
};

describe("Alchemy", () => {
    let alchemy: Alchemy;
    beforeEach(async () => {
        alchemy = new Alchemy();
        await alchemy.init();
    });

    test("Should send correct webhook", async () => {
        const spy = jest.spyOn(alchemyService, "postToWebhook");
        await alchemy.transferCallback(event);
        expect(spy).toHaveBeenCalled();
    });
});
