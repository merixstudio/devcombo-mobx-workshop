import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import injectTap from 'react-tap-event-plugin';

import { App } from './components';

import theme from './constants/mui-theme';

import './styles/main.scss';

injectTap();

ReactDOM.render((
  <MuiThemeProvider muiTheme={theme}>
    <App />
  </MuiThemeProvider>
), document.querySelector('#mount-point'));
