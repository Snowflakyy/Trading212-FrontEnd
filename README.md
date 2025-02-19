# FrontEnd implementation:
##prerequisites:
### Run to `localhost:8080/api/v1/wallet` POST method with body
``` typescript 
{
walletName: "your- name",
walletBalance:"your-balance
}
```
- zustand for store-management,
- styled-components for styling,
- customly defined components
- maintainable code
- barrel exports on every folder
  Expected Design:
  
  ![image](https://github.com/user-attachments/assets/b2bad0b2-f927-49dd-864e-63ccb3ed2d6e)
  ![image](https://github.com/user-attachments/assets/5c7d7368-c709-4f26-beb8-cefd3f5683e9)

  ## 4 different zustand stores
  ### useCryptoStore,useTransactionsStore and useWalletStore:
  - are all listening for message from the ws://localhost:8080/api/v1/ws/crypto via useWebSocketStore
 
  All actions are supported(w/o reset):
  Buy/Sell - for transactions

  Future Updates : Better code scalability, UI/UX optimized visualization
