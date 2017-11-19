import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import injectTap from 'react-tap-event-plugin';

import { Header } from './components';

import theme from './constants/mui-theme';

import './styles/main.scss';

injectTap();

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <div>
      <Header />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#mount-point'));
