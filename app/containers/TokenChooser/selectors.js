import { createSelector } from 'reselect';

/**
 * Direct selector to the tokenChooser state domain
 */
const selectTokenChooserDomain = (state) => state.get('tokenchooser');

const makeSelectTokenList = () => createSelector(
  selectTokenChooserDomain,
  (substate) => substate.get('tokenList').toJS()
);
const makeSelectChosenTokens = () => createSelector(
  selectTokenChooserDomain,
  (substate) => substate.get('chosenTokens').toJS()
);

const makeSelectIsShowTokenForm = () => createSelector(
  selectTokenChooserDomain,
  (substate) => substate.get('isShowTokenForm')
);


export {
  selectTokenChooserDomain,

  makeSelectTokenList,
  makeSelectChosenTokens,

  makeSelectIsShowTokenForm,
};
