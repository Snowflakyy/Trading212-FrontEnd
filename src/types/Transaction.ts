import {
  CryptoWebSocketHoldingDto,
  CryptoWebSocketResponse,
  CryptoWebSocketTransactionDto,
} from "./CryptoWebSocket";
import { WalletTransactionDto } from "./Wallet";

type TransactionType = "BUY" | "SELL";

export interface CreateTransactionRequest {
  walletName: string;
  cryptoSymbol: string;
  quantity: number;
  pricePurchased: number;
  transactionType: TransactionType;
}
export interface TransactionResponse {
  transactionType: TransactionType;
  quantity: number;
  pricePurchased: number;
  crypto: CryptoWebSocketHoldingDto;
  createdDate: String;
  walletName: WalletTransactionDto;
}
export interface TransactionDto extends TransactionResponse {}
