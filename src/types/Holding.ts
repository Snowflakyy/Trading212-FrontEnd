import { CryptoWebSocketHoldingDto } from "./CryptoWebSocket";

export interface HoldingResponse {
  cryptoName:string;
  cryptoSymbol:string;
  holdingQuantity: number;
  holdingReturn: number;
  profitLoss: number;
  profitLossPercentage: number;
  isProfit: boolean;
}
