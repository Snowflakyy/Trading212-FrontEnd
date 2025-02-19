import React, { useEffect } from "react";
import { TransactionsTable } from "./collections";
import { HomePage } from "./pages";
import { useWebSocketStore } from "./stores/useWebSocketStore";
import { useCryptoStore, useTransactionStore, useWalletStore } from "./stores";

function App() {
  const{connectSocket,disconnectSocket} = useWebSocketStore();
  const {fetchAllHoldings,fetchAllTransactions} = useTransactionStore()
  const {fetchWallet} = useWalletStore()
  const{fetchAllPrices}= useCryptoStore()
  useEffect(() => {
    // Initial data fetch
    const initialize = async () => {
      await useCryptoStore.getState().fetchAllPrices();
      await useTransactionStore.getState().fetchAllHoldings();
      await useTransactionStore.getState().fetchAllTransactions();
      await useWalletStore.getState().fetchWallet("1");
      
      // Connect WebSocket after initial data fetch
      connectSocket();
    };
    
    initialize();

    return () => {
      disconnectSocket();
    };
  }, []);
  return (
    <>
  <HomePage/>
    </>
  );
}

export default App;
