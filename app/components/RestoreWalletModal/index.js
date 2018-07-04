/**
*
* RestoreWalletModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal, Button, Input, Icon, Tooltip, Upload, Divider } from 'antd';

const Div = styled.div`
  margin-top: 12px;
`;

const Span = styled.span`
  color: red;
  font-size: 21px;
  padding-right: 12px;
  vertical-align: sub;
`;

const Description = styled.div`
  margin-bottom: 10px;
`;

function RestoreWalletModal(props) {
  const {
    isShowRestoreWallet,
    userSeed,
    userPassword,
    userKeystore,
    restoreWalletError,
    onChangeUserSeed,
    onChangeUserPassword,
    onChangeUserKeystore,
    onRestoreWalletCancel,
    onRestoreWalletFromSeed,
    onRestoreWalletFromKeystore,
  } = props;
  // const suffix = userSeed ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
  const errorComponent =
    (<Span key="error">
      <Tooltip placement="bottom" title={restoreWalletError}>
        <Icon type="close-circle-o" style={{ color: 'red' }} />
      </Tooltip>
    </Span>);

  return (
    <Modal
      visible={isShowRestoreWallet}
      title="Restore Wallet"
      onOk={onRestoreWalletCancel}
      onCancel={onRestoreWalletCancel}
      footer={[
        restoreWalletError ? errorComponent : null,
        <Button
          key="submit"
          type="primary"
          size="large"
          onClick={(evt) => {
            if (userKeystore) {
              onRestoreWalletFromKeystore(evt);
            } else {
              onRestoreWalletFromSeed(evt);
            }
          }}
        >
          Restore
        </Button >,
      ]}
    >
      <Description> {"HDPathString m/44'/60'/0'/0 is used for address generation"}</Description>
      <Input
        placeholder="Enter seed"
        prefix={<Icon type="wallet" />}
        value={userSeed}
        onChange={onChangeUserSeed}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
      />
      <Divider>Or</Divider>
      <Upload
        accept=".json"
        beforeUpload={() => false}
        onChange={onChangeUserKeystore}
        showUploadList={false}
      >
        <Button>
          { userKeystore ? userKeystore.name : 'Choose Keystore file'}
        </Button>
      </Upload>
      <Div>
        <Input
          placeholder="Enter password for keystore encryption"
          prefix={<Icon type="key" />}
          value={userPassword}
          onChange={onChangeUserPassword}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          type="password"
        />
      </Div>
    </Modal>
  );
}

RestoreWalletModal.propTypes = {
  isShowRestoreWallet: PropTypes.bool,
  userSeed: PropTypes.string,
  userPassword: PropTypes.string,
  userKeystore: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onChangeUserSeed: PropTypes.func,
  onChangeUserPassword: PropTypes.func,
  onChangeUserKeystore: PropTypes.func,
  restoreWalletError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
  onRestoreWalletCancel: PropTypes.func,
  onRestoreWalletFromSeed: PropTypes.func,
  onRestoreWalletFromKeystore: PropTypes.func,
};

export default RestoreWalletModal;
