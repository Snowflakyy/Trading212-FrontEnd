import { create } from "zustand";
import { api } from "../actions";
import {
  CreateTransactionRequest,
  HoldingResponse,
  TransactionDto,
  TransactionResponse,
} from "../types";

interface TransactionStore {
  transactions: TransactionResponse[];
  holdings: HoldingResponse[];
  isLoading: boolean;
  error: string | null;

  createTransaction: (
    data: CreateTransactionRequest
  ) => Promise<TransactionResponse | null>;
  fetchTransaction: (id: string) => Promise<TransactionResponse | null>;
  fetchAllHoldings: () => Promise<void>;
  fetchAllTransactions: () => Promise<void>;
}
export const useTransactionStore = create<TransactionStore>((set, get) => ({
  transactions: [],
  holdings: [],
  isLoading: false,
  error: null,

  createTransaction: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api
        .dTransaction({})
        .createTransaction({ ...data });
      const newTransaction = response.data;

      set((state) => ({
        transactions: [...state.transactions, newTransaction],
        isLoading: false,
      }));
      return newTransaction;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
  fetchTransaction: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.dTransaction({}).fetchTransaction(id);
      set({ isLoading: false });
      return response.data;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return null;
    }
  },
  fetchAllHoldings: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.dTransaction({}).fetchAllHoldings();
      console.log("The repsonse is:",response.data)
      set({ holdings: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  fetchAllTransactions:async () =>{
    set({ isLoading: true, error: null });
    try {
      const response = await api.dTransaction({}).fetchAllTransactions();
      set({ transactions: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  }
}));
