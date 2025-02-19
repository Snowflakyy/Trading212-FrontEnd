import { ColumnDef } from "@tanstack/react-table";
import {TransactionResponse } from "../../../../types";
import {
  CryptoHeading,
  CryptoNameSymbolContainer,
  CryptoSubHeading,
  ProfitLoss,
  QuantityContainer,
  TransactionBuySell,
  TransactionQuantity,
} from "./elements";

export const columns: ColumnDef<TransactionResponse>[] = [
  {
    accessorKey: "Name",
    cell: ({ row }) => (
   <CryptoNameSymbolContainer>
         <CryptoHeading>{row.original.crypto.cryptoName}</CryptoHeading>
         <CryptoSubHeading>
           {row.original.crypto.cryptoSymbol}
         </CryptoSubHeading>
       </CryptoNameSymbolContainer>
    ),
  },
  {
    accessorKey: "Transaction",
    cell: ({ row }) => (
      <QuantityContainer>
        <TransactionBuySell>{row.original.transactionType}</TransactionBuySell>
        <TransactionQuantity>{row.original.quantity}</TransactionQuantity>
      </QuantityContainer>
    ),
  },
  {
    accessorKey: "Return",
    cell: ({ row }) => {
      const price = Number(row.original.pricePurchased * row.original.quantity);
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return (
        <ProfitLoss isReturn isProfit={row.original.transactionType === "SELL"}>
          {row.original.transactionType === "SELL" ? "+" : "-"}
          {formattedPrice}
        </ProfitLoss>
      );
    },
  },
];
