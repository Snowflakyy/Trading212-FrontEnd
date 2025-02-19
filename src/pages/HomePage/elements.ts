import styled from "styled-components";
import { Wallet as _wallet,Navbar as _navbar,CryptoTable as _tcrypto,TransactionsTable as _ttransactions, HoldingTable as _tholding } from "../../collections";
export const HomePageContainer = styled.div`
margin: 0px 15px;
`
export const MainContent = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 24px 0;
`
export const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:16px;
`
export const Navbar = styled(_navbar)``
export const Wallet = styled(_wallet)``;

export const CryptoTable = styled(_tcrypto)``
export const TransactionsTable = styled(_ttransactions)``
export const HoldingsTable = styled(_tholding)``
