import { useState } from "react";
import { CryptoWebSocketResponse } from "../../types";
import {
  ModalContainer,
  ModalHeader,
  TokenDetails,
  TokenInfo,
  TokenIcon,
  TokenName,
  TokenSymbol,
  CloseButton,
  ModalContent,
  PriceSection,
  PriceLabel,
  PriceValue,
  Input,
  ActionButton,
} from "./elements";
import TokenLogo from "../../assets/TokenLogo.svg";
import { X } from "lucide-react";
import { useModal } from "../../hooks/useModal";


export const CryptoModal: React.FC = ({
}) => {
  const [quantity, setQuantity] = useState<string>("");
  const {modalState,closeModal,handleTransaction} = useModal();
  if(!modalState.isOpen) return null;

    const onSubmit = () =>{
        const amount = parseFloat(quantity);
        if(!isNaN(amount) && amount>0){
            handleTransaction(amount)
        }
    }

  return crypto ? (
    <ModalContainer left={modalState.position.x} top={modalState.position.y}>
      <ModalHeader>
        <TokenInfo>
          <TokenIcon src={TokenLogo} />
          <TokenDetails>
            <TokenName>{}</TokenName>
            <TokenSymbol>{modalState.cryptoData?.symbol}</TokenSymbol>
          </TokenDetails>
        </TokenInfo>
        <CloseButton onClick={closeModal}>
          <X size={20} />
        </CloseButton>
      </ModalHeader>
      <ModalContent>
        <PriceSection>
          <PriceLabel>Price</PriceLabel>
          <PriceValue>${modalState.cryptoData?.price.toLocaleString()}</PriceValue>
        </PriceSection>
        <Input
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e: any) => setQuantity(e.target.value)} // Fixed function name
        />
        <ActionButton
          variant={modalState.transactionType === "BUY" ? "buy" : "sell"}
          onClick={() => {
            // Handle transaction logic here
            onSubmit();
            
          }}
        >
          {modalState.transactionType === "BUY" ? "Buy" : "Sell"}
        </ActionButton>
      </ModalContent>
    </ModalContainer>
  ) : (<></>);
};
