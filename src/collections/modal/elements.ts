import styled, { css } from "styled-components";
import { Button as _button,Image as _img } from "../../components";
interface ModalContainerProps{
    left:number;
    top:number;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  ${({ left, top }) => css`
  position: fixed;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  width: 400px;
  border: 1px solid #E5E7EB;
  z-index: 1000;
  top:${top}px;
  left:${left}px;
  `}
`;

// Modal header styling
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #E5E7EB;
`;

// Token info container in header
export const TokenInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TokenIcon = styled(_img)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const TokenDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TokenName = styled.span`
  font-weight: 500;
  color: #101828;
`;

export const TokenSymbol = styled.span`
  color: #667085;
  font-size: 14px;
`;

// Close button
export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #667085;
  
  &:hover {
    color: #101828;
  }
`;

// Modal content
export const ModalContent = styled.div`
  padding: 16px;
`;

export const PriceSection = styled.div`
  margin-bottom: 16px;
`;

export const PriceLabel = styled.div`
  color: #667085;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const PriceValue = styled.div`
  color: #101828;
  font-size: 24px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  margin: 8px 0;
  
  &:focus {
    outline: none;
    border-color: #32D583;
    box-shadow: 0 0 0 4px rgba(50, 213, 131, 0.1);
  }
`;

export const ActionButton = styled(_button)``