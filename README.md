# Ethereum Wallet 

## Ethereum wallet with ERC20 support / web wallet 

This is a development/wallet tool for ethereum originally created by [Paul Laux](https://github.com/paullaux) ([Twitter](https://twitter.com/dr_laux)). Our version is hosted live on heroku [here](https://mouseweb-eth-wallet.herokuapp.com/).

[His version](https://github.com/PaulLaux/eth-hot-wallet) is hosted at https://eth-hot-wallet.com. No Rest Labs used this as a development utility and expanded on some security features, dynamically adding contract hashes, and integrating/testing their block explorer.

### API Providers

- [Infura.io](https://infura.io/) as JsonRPC provider
- [Coinmarketcap](https://coinmarketcap.com/) as exchange rates provider
- [MouseXplore](https://mousexplore.mousebelt.com) as a block explorer provider


#### ERC20 wallet and native token support
Eth-hot-wallet supports erc20 tokens. From the user side, the tokens will have the same look and feel like Ether. 
To interact with contracts, we use 
```javascript
web3.eth.contract(erc20Abi)
```
Like all other network communication in the wallet, calls to erc20 contracts are done inside `app/containers/Header/saga.js`.
ERC20 Abi can be imported using 
```javascript
import { erc20Abi } from 'utils/contracts/abi';
```


#### npm scripts for eth-hot wallet:

`npm run build:dll` to build webpack DLL required for development.

`npm run start` to start development mode. Go to http://localhost:3001 - changes will be reflected in realtime using hot module reloading.

`npm run build` to create bundle for publishing

`npm run generate` to create new components / containers using the generator.

For more documentation regarding the react setup see [react-boiledplate docs](https://eth-hot-wallet.com/docs/react-boilerplate/) here or in the official repo.

## License

This project is licensed under the MIT license, Copyright (c) 2017 Paul Laux For more information see `LICENSE.md`.
