/**
*
* TokenIcon
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  {
    color: #dbd9ff;
    font: 20px Impact;
    text-transform: uppercase;
  }
`;

class TokenIcon extends PureComponent {
  state = {
    iconPath: 'token-icons/eth.png',
  };

  componentWillMount() {
    const { tokenSymbol } = this.props;

    this.setState({
      iconPath: `token-icons/${tokenSymbol}.png`,
    });
  }

  handleError = () => {
    this.setState({
      iconPath: 'token-icons/eth.png',
    });
  }

  render() {
    const { tokenSymbol, size } = this.props;
    const { iconPath } = this.state;
    return (
      <span>
        <Img alt={tokenSymbol} src={iconPath} height={size.toString()} onError={this.handleError} />
      </span>
    );
  }
}

TokenIcon.propTypes = {
  tokenSymbol: PropTypes.string,
  size: PropTypes.number,
};

TokenIcon.defaultProps = {
  size: 24,
};

export default TokenIcon;
