/*
 *
 * TokenChooser reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_TOKEN,
  SHOW_ADD_TOKEN_FORM,
  HIDE_ADD_TOKEN_FORM,
  SUBMIT_NEW_TOKEN_SUCCESS,
  SUBMIT_NEW_TOKEN_ERROR,
} from './constants';

const initialState = fromJS({
  chosenTokens: { eos: true },

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
        .set('isShowTokenForm', false);
    case SUBMIT_NEW_TOKEN_ERROR:
      return state;
    default:
      return state;
  }
}

export default tokenChooserReducer;
