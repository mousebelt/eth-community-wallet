/*
 *
 * TokenChooser reducer
 *
 */

import { fromJS } from 'immutable';
import localStore from 'store/dist/store.modern';
import {
  localStorageTokenList,
  localStorageChosenTokens,
} from 'utils/constants';

import TokenSelection from './token-lists';

import {
  TOGGLE_TOKEN,
  SHOW_ADD_TOKEN_FORM,
  HIDE_ADD_TOKEN_FORM,
  SUBMIT_NEW_TOKEN_SUCCESS,
  SUBMIT_NEW_TOKEN_ERROR,
} from './constants';

let savedTokenList = {};
let savedChosenTokens = {};

try {
  // Load token list from local storage
  savedTokenList = localStore.get(localStorageTokenList);

  // If no saved token list, then use default TokenSelection
  if (!savedTokenList) {
    localStore.set(localStorageTokenList, TokenSelection);
    savedTokenList = TokenSelection;
  }

  // Load chosen token from local storage
  savedChosenTokens = localStore.get(localStorageChosenTokens) || {};
} catch (err) {
  console.log(err);
}

const initialState = fromJS({
  tokenList: savedTokenList,

  chosenTokens: savedChosenTokens,

  isShowTokenForm: false,

});

function tokenChooserReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TOKEN:
      return state.setIn(['chosenTokens', action.symbol], action.toggle);
    case SHOW_ADD_TOKEN_FORM:
      return state.set('isShowTokenForm', true);
    case HIDE_ADD_TOKEN_FORM:
      return state.set('isShowTokenForm', false);
    case SUBMIT_NEW_TOKEN_SUCCESS:
      return state
        .set('isShowTokenForm', false)
        .set('tokenList', fromJS(action.newTokenList))
        .setIn(['chosenTokens', action.tokenInfo.symbol], true);
    case SUBMIT_NEW_TOKEN_ERROR:
      return state;
    default:
      return state;
  }
}

export default tokenChooserReducer;
