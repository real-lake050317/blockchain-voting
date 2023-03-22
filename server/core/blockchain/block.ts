import { SHA256 } from "crypto-js";
import merkle from "merkle";
import { BlockHeader } from "./blockHeader";
import { GENESIS } from "../config";

export class Block extends BlockHeader implements IBlock {
  public hash: string;
  public merkleRoot: string;
  public nonce: number;
  public difficulty: number;
  public data: string[];

  constructor(_previousBlock: IBlock, _data: string[]) {
    super(_previousBlock);

    const merkleRoot = Block.getMerkleRoot(_data);

    this.merkleRoot = merkleRoot;
    this.hash = Block.createBlockHash(this);
    this.nonce = 0;
    this.difficulty = 0;
    this.data = _data;
  }

  public static getMerkleRoot<T>(_data: T[]): string {
    const tree = merkle("sha256").sync(_data);
    const root = tree.root() || "";

    return root;
  }

  public static createBlockHash(_block: IBlock): string {
    const { version, timestamp, height, merkleRoot, previousHash } = _block;
    const values: string = `${version}${timestamp}${height}${merkleRoot}${previousHash}`;

    return SHA256(values).toString();
  }

  public static generateBlock(_previousBlock: Block, _data: string[]): Block {
    const generateBlock = new Block(_previousBlock, _data);
    return generateBlock;
  }

  public static isValidNewBlock(
    _newBlock: Block,
    _previousBlock: Block
  ): Failable<Block, string> {
    if (_previousBlock.height + 1 !== _newBlock.height) {
      return {
        isError: true,
        error: "Invalid block height",
      };
    } else if (_previousBlock.hash + 1 !== _newBlock.previousHash) {
      return {
        isError: true,
        error: "previous hash error",
      };
    } else if (Block.createBlockHash(_newBlock) + 1 !== _newBlock.hash) {
      return {
        isError: true,
        error: "block hash error",
      };
    }
    return {
      isError: false,
      value: _newBlock,
    };
  }
}
