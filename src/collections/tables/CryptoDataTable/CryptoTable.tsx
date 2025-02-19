import { useEffect } from "react";
import { useCryptoStore } from "../../../stores";
import { columns } from "../assets/CryptoDataTable/columns";
import { DataTable } from "../data-table";
import { ContentInfo, TableHeading } from "../assets/CryptoDataTable/elements";
import {
  TableContainer,
  TableContentInfoContainer,
  TableHeaderContainer,
} from "../elements";
import { CryptoWebSocketResponse } from "../../../types";
import { ModalProvider } from "../../../hooks/useModal";
import { CryptoModal } from "../../modal";
import { useErrorBoundary } from "react-error-boundary";
import { useWebSocketStore } from "../../../stores/useWebSocketStore";

const data: CryptoWebSocketResponse[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 520.21,
  },
  {
    name: "tBTC",
    symbol: "TBTC",
    price: 520.21,
  },
  {
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    price: 397015.69,
  },
  {
    name: "yearn.finance",
    symbol: "YFI",
    price: 397015.69,
  },
  {
    name: "PAX Gold",
    symbol: "PAXG",
    price: 397015.69,
  },
];

export const CryptoTable = () => {
  const {
    cryptos,
    isLoading,
    error,
  
  } = useCryptoStore();

  const latestMessage = useWebSocketStore((state) => state.latestMessage);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:{error}</div>;
  return (
    <ModalProvider>
      <TableContainer>
        <TableHeaderContainer>
          <TableHeading>Tokens</TableHeading>
          <TableContentInfoContainer>
            <ContentInfo>{cryptos.length} tokens</ContentInfo>
          </TableContentInfoContainer>
        </TableHeaderContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <DataTable columns={columns} data={cryptos} />
        )}{" "}
        <CryptoModal/>
      </TableContainer>
    </ModalProvider>
  );
};
