import { takeLatest, put, select } from 'redux-saga/effects';
import localStore from 'store/dist/store.modern';

import {
  localStorageTokenList,
} from 'utils/constants';
import { makeSelectNetworkName } from 'containers/Header/selectors';

import { SUBMIT_NEW_TOKEN } from './constants';
import {
  submitNewTokenSuccess,
  submitNewTokenError,
} from './actions';
import { makeSelectTokenList } from './selectors';

// Individual exports for testing

export function* submitNewTokenS(action) {
  const { tokenInfo } = action;

  console.log(tokenInfo);

  if (!tokenInfo || !tokenInfo.symbol || !tokenInfo.contractAddress || !tokenInfo.decimal) {
    return yield put(submitNewTokenError('Invalid token information'));
  }

  const networkName = yield select(makeSelectNetworkName());
  const tokenList = yield select(makeSelectTokenList());

  // Check if same token already exist in token list
  const tokensForNetwork = tokenList[networkName];
  const filteredTokens = tokensForNetwork.filter((token) => (
    token.symbol === tokenInfo.symbol || token.contractAddress === tokenInfo.contractAddress
  ));

  if (filteredTokens.length) {
    return yield put(submitNewTokenError('Token already exist'));
  }

  const newTokenList = { ...tokenList };
  newTokenList[networkName].push(tokenInfo);
  localStore.set(localStorageTokenList, newTokenList);

  return yield put(submitNewTokenSuccess(tokenInfo, newTokenList));
}

export default function* defaultSaga() {
  yield takeLatest(SUBMIT_NEW_TOKEN, submitNewTokenS);
}
