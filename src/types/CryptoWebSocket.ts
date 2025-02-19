export interface CryptoWebSocketTransactionDto {
  cryptoSymbol: string;
}
export interface CryptoWebSocketHoldingDto {
  cryptoSymbol: string;
  cryptoName: string;
}
export interface CryptoWebSocketResponse {
  name: string;
  symbol: string;
  price: number;
  // lastUpdated: Date;
}
