import styled, { css } from "styled-components";
import {
  BodyMdRg as _bodymdrg,
  BodyMdSb as _bodymdsb,
  BodyMdMd as _bodymdmd,
} from "../../../../components";
import { theme } from "../../../../styles";

interface ValueState {
  isReturn?: boolean;
  isProfit?: boolean;
}
export const CryptoHeading = styled(_bodymdrg)``;
export const CryptoSubHeading = styled(_bodymdsb)``;
export const TransactionBuySell = styled(_bodymdmd)``;
export const TransactionQuantity = styled(_bodymdrg)`
color:${theme.colors.textSecondaryDark}
`;

export const ProfitLoss = styled(_bodymdrg)<ValueState>`
  ${({ isReturn, isProfit }) => css`
    color: ${!isReturn
      ? theme.colors.dark
      : isProfit
      ? theme.colors.successPrimary
      : theme.colors.errorPrimary};
  `}
`;
export const CryptoNameSymbolContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
