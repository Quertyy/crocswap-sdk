import { BigNumber } from "ethers";
export declare function liquidityForBaseQty(price: number, qty: BigNumber, mult?: number): BigNumber;
export declare function liquidityForQuoteQty(price: number, qty: BigNumber, mult?: number): BigNumber;
export declare function baseVirtualReserves(price: number, liq: BigNumber, mult?: number): BigNumber;
export declare function quoteVirtualReserves(price: number, liq: BigNumber, mult?: number): BigNumber;
export declare function liquidityForBaseConc(price: number, qty: BigNumber, lower: number, upper: number): BigNumber;
export declare function liquidityForQuoteConc(price: number, qty: BigNumber, lower: number, upper: number): BigNumber;
export declare function baseTokenForConcLiq(price: number, liq: BigNumber, lower: number, upper: number): BigNumber;
export declare function quoteTokenForConcLiq(price: number, liq: BigNumber, lower: number, upper: number): BigNumber;
export declare function baseTokenForQuoteConc(baseQty: number, lower: number, upper: number): number;
export declare function quoteTokenForBaseConc(quoteQty: number, lower: number, upper: number): number;
export declare function baseConcFactor(price: number, lower: number, upper: number): number;
export declare function quoteConcFactor(price: number, lower: number, upper: number): number;
export declare function concDepositSkew(price: number, lower: number, upper: number): number;
export declare function concDepositBalance(price: number, lower: number, upper: number): number;
export declare function capitalConcFactor(price: number, lower: number, upper: number): number;
export declare function concBaseSlippagePrice(spotPrice: number, upperPrice: number, slippage: number): number;
export declare function concQuoteSlippagePrice(spotPrice: number, lowerPrice: number, slippage: number): number;
export declare function roundForConcLiq(liq: BigNumber): BigNumber;
