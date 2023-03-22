import { Block } from "../core/blockchain/block";
import { GENESIS } from "../core/config";

describe("Block Verification", () => {
  let newBlock: Block;

  it("should verify a block", () => {
    const isValidBlock = Block.isValidNewBlock(newBlock, GENESIS);

    if (isValidBlock.isError) {
      console.error(isValidBlock.error);
      return expect(true).toBe(false);
    }
    expect(isValidBlock.isError).toBe(false);
  });
});
