import styled, { css } from "styled-components";
import {
  H4Lg as _h4lg,
  BodyMdRg as _bodymdrg,
  H4Sm as _h4sm,
  SpanElement as _span
} from "../../components";
import { theme } from "../../styles";
interface ValueState{
    isReturn?:boolean;
    isProfit?:boolean;
}
export const WalletContentTitle = styled(_bodymdrg)`
  color: ${theme.colors.textSecondaryDark};
`;
export const WalletName = styled(_h4lg)``;
export const CurrencyType = styled(_h4sm)``
export const ValueAmount = styled(_h4lg)<ValueState>`
  ${({ isReturn, isProfit }) => css`
    color: ${!isReturn ? theme.colors.dark : isProfit ? theme.colors.successPrimary : theme.colors.errorPrimary};
  `}
`;
export const FloatingValueAmount = styled(_span)`
${theme.typography.h4.small};
`;
export const WalletContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
`;
export const WalletNameAndValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
border: 1px solid #EAECF0;
background: #FFF;
box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
padding:16px 114px 16px 16px;
gap:16px;
`;
export const WalletReturnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
border: 1px solid #EAECF0;
background: #FFF;
box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
padding:16px 114px 16px 16px;
gap:16px;


`;
export const WalletRowOneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:100%;
`;
export const WalletRowTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ValueContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:4px;
`
