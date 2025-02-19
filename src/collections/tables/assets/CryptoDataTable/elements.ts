import styled from "styled-components";
import {
  Button as _button,
  BodyMdRg as _bodymdrg,
  BodyMdSb as _bodymdsb,
  BodyMdMd as _bodymdmd,
  BodyLg as _bodylg,
  BodySmMd as _bodysmmd,
} from "../../../../components";
import {
  Table as _table,
  TableBody as _tbody,
  TableCell as _tcell,
  TableHead as _thead,
  TableHeader as _theader,
  TableRow as _trow,
} from "../../../../components";
import { theme } from "../../../../styles";
export const CryptoHeading = styled(_bodymdrg)``;
export const CryptoSubHeading = styled(_bodymdsb)`
  opacity: 0.5;
`;
export const CryptoPrice = styled(_bodymdmd)``;
export const Button = styled(_button)``;
export const TableHeading = styled(_bodylg)``;
export const ContentInfo = styled(_bodysmmd)``;
export const CryptoCellContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CryptoNameSymbolContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.paddings.padding2};
`;
