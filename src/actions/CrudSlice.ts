import axios, { AxiosResponse } from "axios";
import {
  CreateTransactionRequest,
  CryptoWebSocketResponse,
  HoldingResponse,
  TransactionResponse,
  WalletRequest,
  WalletResponseDto,
} from "../types";
export const baseURL = "http://localhost:8080/api/v1";
export interface UrlProps {
  url?: string;
  idUser?: string;
}
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {
  dWallet({ url = baseURL + "/wallet", idUser = "" }: UrlProps) {
    return {
      createWallet: async (
        newRecord: WalletRequest
      ): Promise<AxiosResponse<WalletResponseDto>> => {
        return axios.post(url, newRecord, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", // Indicates that the request body is JSON
          },
        });
      },
      fetchWallet: async (
        walletId: string = ""
      ): Promise<AxiosResponse<WalletResponseDto>> => {
        return await axios.get(`${url}/${walletId}`);
      },
      resetWallet: async (newRecord : WalletRequest,
        walletId: string = ""
      ): Promise<AxiosResponse<WalletResponseDto>> => {
        return await axios.put(`${url}/reset/${walletId}`,newRecord);
      },
    };
  },
  dTransaction({ url = baseURL + "/transaction", idUser = "" }: UrlProps) {
    return {
      createTransaction: async (
        newRecord: CreateTransactionRequest
      ): Promise<AxiosResponse<TransactionResponse>> => {
        return axios.post(url, newRecord, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
      },
      fetchTransaction: async (
        transactionId: string
      ): Promise<AxiosResponse<TransactionResponse>> => {
        return axios.get(`${url}/${transactionId}`);
      },
      fetchAllHoldings: async (): Promise<AxiosResponse<HoldingResponse[]>> => {
        return axios.get(`${url}/holding`);
      },
      fetchAllTransactions:async():Promise<AxiosResponse<TransactionResponse[]>>=>{
        return axios.get(`${url}`);
      }
    };
  },
  dCrypto({ url = baseURL + "/price", idUser = "" }: UrlProps) {
    return {
      fetchAllPrices:async  (): Promise<
        AxiosResponse<CryptoWebSocketResponse[]>
      > => {
        return axios.get(`${url}/top20`);
      },
      fetchPriceBySymbol: async (
        symbol: string
      ): Promise<AxiosResponse<CryptoWebSocketResponse>> => {
        return axios.get(`${url}/${symbol}`);
      },
    };
  },
};
