import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import {
  Button,
  ButtonContainer,
  CryptoCellContainer,
  CryptoHeading,
  CryptoNameSymbolContainer,
  CryptoPrice,
  CryptoSubHeading,
} from "./elements";
import { CryptoWebSocketResponse } from "../../../../types";
import { access } from "fs";
import { useModal } from "../../../../hooks/useModal";
export const columns: ColumnDef<CryptoWebSocketResponse>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="tertiary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <CryptoNameSymbolContainer>
        <CryptoHeading>{row.original.name}</CryptoHeading>
        <CryptoSubHeading>{row.original.symbol}</CryptoSubHeading>
      </CryptoNameSymbolContainer>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="tertiary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = Number(row.original.price);
      const formatterPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <CryptoPrice>{formatterPrice}</CryptoPrice>;
    },
  },
  {
    accessorKey: "actions",
    header: ({ column }) => {
      return <Button variant="tertiary">Price</Button>;
    },
    cell: ({ row }) => <ActionCell row={row}/>
    ,
  },
];
const ActionCell: React.FC<{ row: any }> = ({ row }) => {
  const { openModal } = useModal();

  const handleButtonClick = (
    e: React.MouseEvent,
    transactionType: "BUY" | "SELL"
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    openModal(transactionType, row.original, {
      x: rect.left,
      y: rect.bottom + window.scrollY/2 -100,
    });
  };

  return (
    <ButtonContainer>
      <Button
        variant="buy"
        onMouseEnter={(e) => handleButtonClick(e, "BUY")}
      >
        Buy
      </Button>
      <Button
        variant="sell"
        onMouseEnter={(e) => handleButtonClick(e, "SELL")}
      >
        Sell
      </Button>
    </ButtonContainer>
  );
};
