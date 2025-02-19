import React from "react";
import {
  ContentInfo,
  TableContainer,
  TableContentInfoContainer,
  TableHeaderContainer,
  TableHeading,
} from "../elements";
import { DataTable } from "../data-table";
import { columns } from "../assets/HoldingsTable/columns";
import { HoldingResponse } from "../../../types";
import { useTransactionStore } from "../../../stores";

export const HoldingTable = () => {
  const{holdings,isLoading,error} = useTransactionStore()
  if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error:{error}</div>;
    return (
        <TableContainer>
          <TableHeaderContainer>
            <TableHeading>Holding</TableHeading>
            <TableContentInfoContainer>
              <ContentInfo>{holdings.length} Holdings</ContentInfo>
            </TableContentInfoContainer>
          </TableHeaderContainer>
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <DataTable columns={columns} data={holdings} />
          )}{" "}
        </TableContainer>
    );
};
