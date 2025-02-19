import { create } from "zustand";
import { api } from "../actions";
import { WalletRequest, WalletResponseDto } from "../types";

interface WalletStore {
  wallet: WalletResponseDto | null;
  isLoading: boolean;
  error: string | null;

  createWallet: (data: WalletRequest) => Promise<WalletResponseDto | null>;
  fetchWallet: (id: string) => Promise<void>;
  resetWallet: (newWallet:WalletRequest,id: string) => Promise<WalletResponseDto | null>;
}
export const useWalletStore = create<WalletStore>((set, get) => ({
  wallet: null,
  isLoading: false,
  error: null,

  createWallet: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.dWallet({}).createWallet({ ...data });
      const newWallet = response.data;

      set((state) => ({
        wallet: newWallet,
        isLoading: false,
      }));
      return newWallet;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
  fetchWallet: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.dWallet({}).fetchWallet(id);
      set({ wallet:response.data,isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  resetWallet: async (newRecord,id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.dWallet({}).resetWallet(newRecord,id);
      const newWallet = response.data;

      set((state) => ({
        wallet: newWallet,
        isLoading: false,
      }));
      return newWallet;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
}));
