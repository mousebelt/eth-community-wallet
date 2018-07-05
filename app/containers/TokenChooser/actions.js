/*
 *
 * TokenChooser actions
 *
 */
import localStore from 'store/dist/store.modern';
import { message } from 'antd';
import {
  localStorageChosenTokens,
} from 'utils/constants';

import {
  TOGGLE_TOKEN,
  CONFIRM_UPDATE_TOKEN_INFO,
  SHOW_ADD_TOKEN_FORM,
  HIDE_ADD_TOKEN_FORM,
  SUBMIT_NEW_TOKEN,
  SUBMIT_NEW_TOKEN_SUCCESS,
  SUBMIT_NEW_TOKEN_ERROR,
} from './constants';

/**
 * Changes whether a single token is selected
 * @param {string} symbol 'eth' or 'eos' ...
 * @param  {boolean} toggle
 *
 * @return {object}      An action object with a type of TOGGLE_TOKEN passing the symbol and toggle
 */
export function toggleToken(symbol, toggle) {
  return {
    type: TOGGLE_TOKEN,
    symbol,
    toggle,
  };
}


/**
 * confirm new tokens
 *
 * @param {object} chosenTokens directly from state
 * @param {string} networkName
 *
 * @return {object} An action object with a type of CONFIRM_UPDATE_TOKEN_INFO passing the symbol and toggle
 */
export function confirmNewTokenInfo(chosenTokens, tokenList, networkName) {
  if (!chosenTokens) {
    return { type: CONFIRM_UPDATE_TOKEN_INFO, tokenInfo: {} };
  }

  localStore.set(localStorageChosenTokens, chosenTokens);

  const filteredArray = tokenList[networkName].filter((x) => chosenTokens[x.symbol]);

  const tokenInfo = filteredArray.reduce((acc, current) => {
    const { symbol, description, ...newObject } = current; // remove symbol,description
    acc[current.symbol] = newObject;
    return acc;
  }, {});

  return {
    type: CONFIRM_UPDATE_TOKEN_INFO,
    tokenInfo,
  };
}

/**
 * Show add token form
 */
export function showAddTokenForm() {
  return {
    type: SHOW_ADD_TOKEN_FORM,
  };
}

/**
 * Hide add token form
 */
export function hideAddTokenForm() {
  return {
    type: HIDE_ADD_TOKEN_FORM,
  };
}

/**
 * Submit new token
 */
export function submitNewToken(tokenInfo) {
  return {
    type: SUBMIT_NEW_TOKEN,
    tokenInfo,
  };
}

/**
 * Submit new token success
 */
export function submitNewTokenSuccess(tokenInfo, newTokenList) {
  message.success('Added new token successfully.');

  return {
    type: SUBMIT_NEW_TOKEN_SUCCESS,
    tokenInfo,
    newTokenList,
  };
}

/**
 * Submit new token error
 */
export function submitNewTokenError(error) {
  message.error(error);

  return {
    type: SUBMIT_NEW_TOKEN_ERROR,
  };
}
