import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
const NRLColors = {
  black: '#222722',
  yellow: '#ffe965',
  red: '#e34132',

  white: '#ffffff',
  lightWhite: '#f4f4f4',

  grey: '#d6d2d2',
  lightGrey: '#eaebea',

  green: '#3cb878',
  lightGreen: '#fdfffc',
};

/* eslint no-unused-expressions: 0 */
/* injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f8f8f8;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Space' Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  body {
    text-align: center;
  }
  hr {
    width: 200px;
    text-align:center !important;
    margin: 0 auto !important;
  }
`; */

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: ${NRLColors.black};
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f8f8f8;
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    font-family: 'Space Mono', monospace;
    margin: 0px;
    color: ${NRLColors.black};
  }

  body {
    text-align: center;
  }

  hr {
    width: 200px;
    text-align:center !important;
    margin: 0 auto !important;
  }

  .ant-btn-primary span {
    color: ${NRLColors.white}
  }

  a {
    color: ${NRLColors.red}
  }
`;
