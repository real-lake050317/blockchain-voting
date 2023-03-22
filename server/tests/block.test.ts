import { Block } from "../core/blockchain/block";
import { GENESIS } from "../core/config";

describe("Block", () => {
  let newBlock: Block;

  it("should create a block", () => {
    const data = ["Block #2"];

    newBlock = Block.generateBlock(GENESIS, data);

    console.log(newBlock);
  });
});
