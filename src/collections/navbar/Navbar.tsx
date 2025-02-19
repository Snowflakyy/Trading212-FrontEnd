import {
  NavbarContainer,
  SectionLogoContainer,
  Logo,
  SectionContainer,
  SectionName,
  Input,
  Button,
} from "./elements";
import Trading212Logo from "../../assets/Logo.svg";
import { Icon, SectionIcon } from "lucide-react";
import { useWalletStore } from "../../stores";
import { WalletRequest } from "../../types";
export const Navbar = () => {
  const walletName = useWalletStore((state)=>state.wallet?.walletName)
  const walletId = useWalletStore((state)=>state.wallet?.walletId)
  const {resetWallet} = useWalletStore()
  const handleReset = () =>{
    if(walletName && walletId){

      const resetWalletDto:WalletRequest = {
       walletName,
       walletBalance:10000
      }
      resetWallet(resetWalletDto,walletId)
    }

  }
  return (
    <NavbarContainer>
      <SectionLogoContainer>
        <Logo src={Trading212Logo} />
        <SectionContainer>
          <SectionIcon
            path="M13.3332 14C13.3332 13.0696 13.3332 12.6044 13.2183 12.2259C12.9598 11.3736 12.2929 10.7067 11.4406 10.4482C11.0621 10.3333 10.5969 10.3333 9.6665 10.3333H6.33317C5.4028 10.3333 4.93761 10.3333 4.55908 10.4482C3.70681 10.7067 3.03986 11.3736 2.78133 12.2259C2.6665 12.6044 2.6665 13.0696 2.6665 14M10.9998 5C10.9998 6.65685 9.65669 8 7.99984 8C6.34298 8 4.99984 6.65685 4.99984 5C4.99984 3.34315 6.34298 2 7.99984 2C9.65669 2 10.9998 3.34315 10.9998 5Z"
            stroke="#7C3AED"
            strokeWidth="1.67"
            viewBox="0 0 24 24"
            fill="none"
            width={24}
            height={24}
          />
          <SectionName>Home</SectionName>
        </SectionContainer>
      </SectionLogoContainer>
    <Button variant="primary" onClick={handleReset}>Reset</Button>
    </NavbarContainer>
  );
};
