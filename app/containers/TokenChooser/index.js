/**
 *
 * TokenChooser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import TokenChooserList from 'components/TokenChooserList';
import TokenChooserAddForm from 'components/TokenChooserAddForm';
import { makeSelectNetworkName } from 'containers/Header/selectors';
import {
  makeSelectChosenTokens,
  makeSelectIsShowTokenForm,
  makeSelectTokenList,
} from './selectors';
import {
  toggleToken,
  confirmNewTokenInfo,
  showAddTokenForm,
  hideAddTokenForm,
  submitNewToken,
} from './actions';
// import { makeSelectTokenChooser } from './selectors';
import reducer from './reducer';
import saga from './saga';

function TokenChooser(props) {
  const {
    isShowTokenChooser,
    onHideTokenChooser,

    isShowTokenForm,
    onShowTokenForm,
    onHideTokenForm,
    onSubmitNewToken,

    tokenList,
    chosenTokens,
    onToggleToken,
    onConfirmNewTokenInfo,
    networkName,

   } = props;

  const TokensForNetwork = tokenList[networkName];

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <Modal
        visible={isShowTokenChooser}
        title={`Select Tokens - ${networkName}`}
        onOk={onHideTokenChooser}
        onCancel={onHideTokenChooser}
        footer={null}
      >
        <TokenChooserList
          tokenList={TokensForNetwork}
          chosenTokens={chosenTokens}
          onTokenToggle={onToggleToken}
        />
        <br />
        {
          isShowTokenForm ? (
            <TokenChooserAddForm
              onHideTokenForm={onHideTokenForm}
              onSubmitNewToken={onSubmitNewToken}
            />
          ) : (
            <div>
              <Button
                type="primary"
                onClick={onShowTokenForm}
                icon="plus-circle-o"
              >
                Add Token
              </Button>
            </div>
          )
        }
        <br />
        <Button
          type="primary"
          onClick={() => onConfirmNewTokenInfo(chosenTokens, tokenList, networkName)}
          disabled={false}
        >
          Update
        </Button>{' '}
        <Button onClick={() => onConfirmNewTokenInfo()} disabled={false} >
          Remove Tokens
        </Button>
      </Modal>
    </div>
  );
}

TokenChooser.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  isShowTokenChooser: PropTypes.bool,
  onHideTokenChooser: PropTypes.func,

  tokenList: PropTypes.object,
  chosenTokens: PropTypes.object,
  onToggleToken: PropTypes.func,
  onConfirmNewTokenInfo: PropTypes.func,

  isShowTokenForm: PropTypes.bool,
  onShowTokenForm: PropTypes.func,
  onHideTokenForm: PropTypes.func,
  onSubmitNewToken: PropTypes.func,

  networkName: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  tokenList: makeSelectTokenList(),

  chosenTokens: makeSelectChosenTokens(),

  networkName: makeSelectNetworkName(),

  isShowTokenForm: makeSelectIsShowTokenForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    onToggleToken: (symbol, toggle) => {
      dispatch(toggleToken(symbol, toggle));
    },
    onConfirmNewTokenInfo: (chosenTokens, tokenList, networkName) => {
      dispatch(confirmNewTokenInfo(chosenTokens, tokenList, networkName));
    },
    onShowTokenForm: () => {
      dispatch(showAddTokenForm());
    },
    onHideTokenForm: () => {
      dispatch(hideAddTokenForm());
    },
    onSubmitNewToken: (tokenInfo) => {
      dispatch(submitNewToken(tokenInfo));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tokenchooser', reducer });
const withSaga = injectSaga({ key: 'tokenchooser', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TokenChooser);
