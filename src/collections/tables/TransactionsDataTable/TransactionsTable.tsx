import React from "react";
import {
  ContentInfo,
  TableContainer,
  TableContentInfoContainer,
  TableHeaderContainer,
  TableHeading,
} from "../elements";
import { DataTable } from "../data-table";
import { columns } from "../assets/TransactionsTable";
import { TransactionResponse } from "../../../types";
import { useTransactionStore } from "../../../stores";

export const TransactionsTable = () => {
  const{transactions,isLoading,error} = useTransactionStore()
 if (isLoading) return <div>Loading...</div>;
     if (error) return <div>Error:{error}</div>;
     return (
         <TableContainer>
           <TableHeaderContainer>
             <TableHeading>transactions</TableHeading>
             <TableContentInfoContainer>
               <ContentInfo>{transactions.length} transactions</ContentInfo>
             </TableContentInfoContainer>
           </TableHeaderContainer>
           {isLoading ? (
             <div>Loading...</div>
           ) : error ? (
             <div>Error: {error}</div>
           ) : (
             <DataTable columns={columns} data={transactions} />
           )}{" "}
         </TableContainer>
     );
};
