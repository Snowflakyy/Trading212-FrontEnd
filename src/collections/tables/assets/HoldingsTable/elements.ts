import styled, { css } from "styled-components";
import {
  BodySmRg as _bodysmrg,
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
export const CryptoSubHeading = styled(_bodymdsb)`
  color: ${theme.colors.textSecondaryDark};
`;
export const CryptoQuantity = styled(_bodymdrg)``;
export const RowHeading = styled(_bodysmrg)`
  color: ${theme.colors.textSecondaryDark};
`;
export const ReturnValue = styled(_bodymdmd)``;
export const ProfitLoss = styled(_bodymdrg)<ValueState>`
  ${({ isReturn, isProfit }) => css`
    color: ${!isReturn
      ? theme.colors.dark
      : isProfit
      ? theme.colors.successPrimary
      : theme.colors.errorPrimary};
  `}
`;
export const ProfitLossPercentage = ProfitLoss;

export const CryptoNameSymbolContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ReturnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
