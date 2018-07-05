
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'http://127.0.0.1:8545', tx_explorer: null },
  // 'Ropsten Testnet': { rpc: 'https://ropsten.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'https://ropsten.etherscan.io/tx/' },
  // 'Main Net': { rpc: 'https://mainnet.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'https://etherscan.io/tx/' },
  'Ropsten Testnet': { rpc: 'https://ropsten.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'http://mousexplore.mousebelt.com/eth/transaction/%s?net=test' },
  'Main Net': { rpc: 'https://mainnet.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'http://mousexplore.mousebelt.com/eth/transaction/%s' },
};

module.exports = Network;
