import React from "react";
import { ContentContainer, CryptoTable, HoldingsTable, HomePageContainer, MainContent, Navbar, TransactionsTable, Wallet } from "./elements";
export const HomePage = () => {
  return (
    <HomePageContainer>
      <Navbar />
      <MainContent>
        <ContentContainer>
      <Wallet />
      <CryptoTable/>
        </ContentContainer>
        <ContentContainer>
          <HoldingsTable/>
          <TransactionsTable/>
        </ContentContainer>
      </MainContent>
    </HomePageContainer>
  );
};
