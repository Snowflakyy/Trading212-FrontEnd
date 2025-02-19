import React, { useEffect } from 'react'
import { CurrencyType, FloatingValueAmount, ValueAmount, ValueContainer, WalletContainer, WalletContentTitle, WalletName, WalletNameAndValueContainer, WalletReturnContainer, WalletRowOneContainer, WalletRowTwoContainer } from './elements'
import { useWalletStore } from '../../stores'

export const Wallet = () => {
    const {wallet,isLoading,error} = useWalletStore()
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error:{error}</div>;
  return (
    <WalletContainer>
        <WalletNameAndValueContainer>
            <WalletRowOneContainer>
                <WalletContentTitle>Wallet name</WalletContentTitle>
                <WalletName>{wallet?.walletName}</WalletName>
            </WalletRowOneContainer>
            <WalletRowTwoContainer>
                <WalletContentTitle>Value</WalletContentTitle>
                <ValueContainer>
                    <CurrencyType>$</CurrencyType>
                <ValueAmount isReturn={false}>{wallet?.walletBalance}</ValueAmount>
                </ValueContainer>
            </WalletRowTwoContainer>
        </WalletNameAndValueContainer>
        <WalletReturnContainer>
            <WalletRowOneContainer>
                <WalletContentTitle>Total Return</WalletContentTitle>
                <ValueContainer>
                <CurrencyType>+USD</CurrencyType>
                <ValueAmount isReturn isProfit={wallet?.profit}>{wallet?.totalReturn}</ValueAmount>
                </ValueContainer>
            </WalletRowOneContainer>
            <WalletRowTwoContainer>
                <WalletContentTitle>Rate of return</WalletContentTitle>
                <ValueContainer>
                <ValueAmount isProfit={wallet?.profit} isReturn>{wallet?.profit ? "+":"-"}{wallet?.totalReturnPercentage}%</ValueAmount>
                </ValueContainer>
            </WalletRowTwoContainer>
        </WalletReturnContainer>
    </WalletContainer>
  )
}

