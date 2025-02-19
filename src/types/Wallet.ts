export interface WalletRequest {
  walletName: string;
  walletBalance: number;
}
export interface WalletTransactionDto {
  walletName: string;
}

export interface WalletResponseDto {
  walletId: string;
  walletName: string;
  walletBalance: number;
  totalReturn:number;
  totalReturnPercentage:number;
  profit:boolean
}
