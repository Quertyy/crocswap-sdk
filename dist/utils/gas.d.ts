import { BigNumber, PopulatedTransaction, Transaction } from "ethers";
import { CrocEnv } from "../croc";
/**
 * Compute the raw transaction data for a given transaction.
 *
 * ref: https://docs.ethers.org/v5/cookbook/transactions/#cookbook--compute-raw-transaction
 */
export declare function getRawTransaction(tx: Transaction): `0x${string}`;
/**
 * Compute the raw transaction data for a given transaction without the signature.
 *
 * ref: https://docs.ethers.org/v5/cookbook/transactions/#cookbook--compute-raw-transaction
 */
export declare function getUnsignedRawTransaction(tx: PopulatedTransaction): `0x${string}`;
/**
 * Estimates the additional L1 gas on Scroll for any data which is a RLP-encoded transaction with signature.
 */
export declare function estimateScrollL1Gas(crocEnv: CrocEnv, rawTransaction: `0x${string}`): Promise<BigNumber>;
