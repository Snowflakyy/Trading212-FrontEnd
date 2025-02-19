import { ColumnDef } from "@tanstack/react-table";
import { HoldingResponse } from "../../../../types";
import {
  CryptoHeading,
  CryptoNameSymbolContainer,
  CryptoQuantity,
  CryptoSubHeading,
  ProfitLoss,
  ReturnContainer,
  ReturnValue,
} from "./elements";

export const columns: ColumnDef<HoldingResponse>[] = [
  {
    accessorKey: "Name",
    cell: ({ row }) => (
      <CryptoNameSymbolContainer>
        <CryptoHeading>{row.original.cryptoName}</CryptoHeading>
        <CryptoSubHeading>
          {row.original.cryptoSymbol}
        </CryptoSubHeading>
      </CryptoNameSymbolContainer>
    ),
  },
  {
    accessorKey: "Quantity",
    cell: ({ row }) => (
      <CryptoQuantity>{row.original.holdingQuantity}</CryptoQuantity>
    ),
  },
  {
    accessorKey: "Return",
    cell: ({ row }) => (
      <ReturnContainer>
        <ReturnValue>{row.original.holdingReturn}</ReturnValue>
        <ProfitLoss isReturn isProfit={row.original.isProfit}>
          {row.original.profitLoss}({row.original.profitLossPercentage}%)
        </ProfitLoss>
      </ReturnContainer>
    ),
  },
];
