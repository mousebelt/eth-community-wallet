export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

/* Auto generated password lenght */
export const generatedPasswordLength = 12;

/* Default HD path string for key generation from seed */
export const hdPathString = `m/44'/60'/0'/0`; // eslint-disable-line

// time in ms for check balancess polling
export const timeBetweenCheckbalances = 180 * 1000;

/* Max gas for send transaction (not gas price) */
export const maxGasForEthSend = 25000;
/* Max gas for token send transaction (not gas price) */
export const maxGasForTokenSend = 60000;


/* Eth unit constants will be saved as strings to prevent accidental manipulation
    usage: convert amount to wei
    const sendAmount = new BigNumber(amount).times(Ether);
*/
export const Ether = (1.0e18).toString();
export const Gwei = (1.0e9).toString();

/* offline mode is special case of error */
export const offlineModeString = 'Offline';
/* Default network to connect after wallet creation (see network.js) */
export const defaultNetwork = 'Ropsten Testnet';

/* keystore will be saved to local storage under this key */
export const localStorageKey = 'ks';

/* Token list will be saved to local storage under this key */
export const localStorageTokenList = 'tokenList';

/* Choosen tokens will be saved to local storage under this key */
export const localStorageChosenTokens = 'chosenTokens';

// addresses:
export const website = 'https://mouseweb-eth-wallet.herokuapp.com/';
export const github = 'https://github.com/norestlabs/eth-community-wallet';

// APIs:
// export const checkFaucetAddress = 'http://localhost:3000/status';
// export const askFaucetAddress = 'http://localhost:3000/ask';
export const checkFaucetAddress = 'https://m6b19m0fxh.execute-api.eu-west-1.amazonaws.com/dev/status';
export const askFaucetAddress = 'https://m6b19m0fxh.execute-api.eu-west-1.amazonaws.com/dev/ask';
