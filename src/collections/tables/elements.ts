import styled from "styled-components";
import {
    Table as _table,
    TableBody as _tbody,
    TableCell as _tcell,
    TableHead as _thead,
    TableHeader as _theader,
    TableRow as _trow,
    Button as _button,
    BodySmMd as _bodysmmd,
    BodyLg as _bodylg,
    H4Sm as _h4sm,
  } from "../../components";
import { theme } from "../../styles";
export const TableHeaderContainer = styled.div`
display: flex;
flex-direction: row;
padding: 20px 24px 19px 24px;
background-color:#F9FAFB;
gap: ${theme.paddings.padding2};
`;
export const TableContentInfoContainer = styled.div`
display: flex;
padding: 2px 8px;
justify-content: center;
align-items: center;
border-radius: var(--radius-sm, 6px);
border: 1px solid var(--Utility-Gray-utility-gray-200, #eaecf0);
background: var(--Utility-Gray-utility-gray-50, #f9fafb);
`;
export const ShowLessContainer = styled.div`
display:flex;
justify-content:center;
`
export const TableContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.1);
  position:relative;
`;

// Main table component
export const Table = styled(_table)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 8px 0;
`;

// Table header styling
export const TableHeader = styled(_theader)`
  background-color: white;
  border-bottom: 1px solid #EAECF0;
`;

// Header row styling
export const TableRow = styled(_trow)`
  &:hover {
    background-color: #F9FAFB;
  }
`;

// Header cell styling
export const TableHead = styled(_thead)`
  text-align: left;
  padding: 12px 24px;
  color: #667085;
  font-weight: 500;
  font-size: 14px;
`;

// Table body styling
export const TableBody = styled(_tbody)`
  & tr:last-child td {
    border-bottom: none;
  }
`;
export const TableCell = styled(_tcell)`
  padding: 16px 24px;
  border-bottom: 1px solid #EAECF0;
  color: #101828;
  font-size: 14px;
`;
export const Button = styled(_button)``;
export const TableHeading = styled(_h4sm)``;
export const ContentInfo = styled(_bodysmmd)``;
