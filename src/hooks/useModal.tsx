import React, { createContext, useContext, useState } from "react";
import { CreateTransactionRequest, CryptoWebSocketResponse } from "../types";
import { useCryptoStore, useTransactionStore, useWalletStore } from "../stores";

interface ModalContextState {
  isOpen: boolean;
  transactionType: "BUY" | "SELL" | null;
  cryptoData: CryptoWebSocketResponse | null;
  position: {
    x: number;
    y: number;
  };
}

interface ModalContextValue {
  modalState: ModalContextState;
  openModal: (
    type: "BUY" | "SELL",
    cryptoData: CryptoWebSocketResponse,
    position: { x: number; y: number }
  ) => void;
  closeModal: () => void;
  handleTransaction: (amount: number) => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { createTransaction } = useTransactionStore();
  const walletName = useWalletStore((state) => state.wallet?.walletName);
  const cryptos = useCryptoStore((state) => state.cryptos)
  const [modalState, setModalState] = useState<ModalContextState>({
    isOpen: false,
    transactionType: null,
    cryptoData: null,
    position: { x: 0, y: 0 },
  });

  const openModal = (
    transactionType: "BUY" | "SELL",
    cryptoData: CryptoWebSocketResponse,
    position: { x: number; y: number }
  ) => {
    setModalState({
      isOpen: true,
      transactionType,
      cryptoData,
      position,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };
  
  const handleTransaction = (amount: number) => {
    const cryptoPrice = cryptos.find(
      (crypto) => crypto.symbol === modalState.cryptoData?.symbol
    );
    if (
      modalState.cryptoData &&
      modalState.transactionType &&
      cryptoPrice &&
      walletName
    ) {
      const reuqestDto: CreateTransactionRequest = {
        walletName,
        cryptoSymbol: modalState.cryptoData.symbol,
        quantity: amount,
        pricePurchased: cryptoPrice.price,
        transactionType: modalState.transactionType,
      };
      createTransaction(reuqestDto);
      console.log(
        `${modalState.transactionType}ing ${amount} ${modalState.cryptoData.symbol}`
      );
    }
    closeModal();
  };

  return (
    <ModalContext.Provider
      value={{ modalState, openModal, closeModal, handleTransaction }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
