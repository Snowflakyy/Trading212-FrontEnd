import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoWebSocketResponse } from "../types";
import { api } from "../actions";
import { io, Socket } from "socket.io-client";
interface CryptoStore {
  cryptos: CryptoWebSocketResponse[];
  isLoading: boolean;
  error: string | null;
  socket: WebSocket | null;

  connectSocket: () => void;
  disconnectSocket: () => void;
  fetchAllPrices: () => Promise<void>;
  fetchPriceBySymbol: (
    symbol: string
  ) => Promise<CryptoWebSocketResponse | null>;
}
const SOCKET_URL = "http://localhost:8080";
const RECONNECTION_ATTEMPTS = 5;
const RECONNECTION_DELAY = 5000;
export const useCryptoStore = create<CryptoStore>()(
  devtools(
    (set, get) => ({
      cryptos: [],
      isLoading: false,
      error: null,
      socket: null,


      fetchAllPrices: async () => {
        set({ isLoading: true, error: null }, false, "crypto/fetch_start");
        try {
          const response = await api.dCrypto({}).fetchAllPrices();
            
          
          set(
            { cryptos: response.data, isLoading: false },
            false,
            "crypto/fetch_success"
          );
        } catch (error: any) {
          set(
            { error: error.message, isLoading: false },
            false,
            "crypto/fetch_error"
          );
        }
      },

      fetchPriceBySymbol: async (symbol) => {
        set(
          { isLoading: true, error: null },
          false,
          "crypto/fetch_symbol_start"
        );
        try {
          const response = await api.dCrypto({}).fetchPriceBySymbol(symbol);
          set({ isLoading: false }, false, "crypto/fetch_symbol_success");
          return response.data;
        } catch (error: any) {
          set(
            {
              error: error.message,
              isLoading: false,
            },
            false,
            "crypto/fetch_symbol_error"
          );
          return null;
        }
      },
    }),
    {
      name: "Crypto Store",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);
