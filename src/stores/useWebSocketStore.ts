import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoWebSocketResponse } from "../types";
import { api } from "../actions";
import { io, Socket } from "socket.io-client";
import { useCryptoStore } from "./useCryptoStore";
import { useTransactionStore } from "./useTransactionStore";
import { useWalletStore } from "./useWalletStore";
interface WebSocketStore {
  isLoading: boolean;
  error: string | null;
  socket: WebSocket | null;
    latestMessage:CryptoWebSocketResponse | null;
  connectSocket: () => void;
  disconnectSocket: () => void;
}
const SOCKET_URL = "http://localhost:8080";
const RECONNECTION_ATTEMPTS = 5;
const RECONNECTION_DELAY = 5000;
export const useWebSocketStore = create<WebSocketStore>()(
  devtools(
    (set, get) => ({
      isLoading: false,
      error: null,
      socket: null,
      latestMessage:null,

      connectSocket: () => {
        try {
          const socket = new WebSocket("ws://localhost:8080/api/v1/ws/crypto");

          socket.onopen = () => {
            console.log("Socket connected");
            set({ error: null }, false, "socket/connected");
            // If you need to subscribe, send a message
            socket.send(
              JSON.stringify({ type: "subscribe", channel: "crypto-updates" })
            );
          };

          socket.onclose = (event) => {
            console.log("Socket disconnected:", event.reason);
            set({ error: "Connection lost" }, false, "socket/disconnected");
          };

          socket.onmessage = (event) => {
            const data = JSON.parse(event.data) as CryptoWebSocketResponse
                console.log("Websocket message received:",data)
                set({latestMessage:data},false,"socket/message")

                useCryptoStore.getState().fetchAllPrices()
                useTransactionStore.getState().fetchAllHoldings()
                useTransactionStore.getState().fetchAllTransactions()
                useWalletStore.getState().fetchWallet("1")
        };

          socket.onerror = (error) => {
            console.log("Socket error:", error);
            set({ error: `Socket error occurred` }, false, "socket/error");
          };

          set({ socket }, false, "socket/initialized");
        } catch (error: any) {
          console.error("Socket setup error:", error);
          set(
            { error: `Socket setup failed:${error.message}` },
            false,
            "socket/setup_error"
          );
        }
      },
      disconnectSocket: () => {
        const { socket } = get();
        if (socket) {
          socket.close(1000, "User initiated disconnect");
          set({ socket: null }, false, "socket/disconnected");
        }
      },
      
    }),
    {
      name: "WebSocket Store",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);
