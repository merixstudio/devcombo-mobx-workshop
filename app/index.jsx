import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import injectTap from 'react-tap-event-plugin';
import { Provider } from 'mobx-react';

import { App } from './views';

import { TaskStore } from './stores';

import { tasks } from './constants/initial-data';

import theme from './constants/mui-theme';

import './styles/main.scss';

injectTap();

ReactDOM.render((
  <Provider taskStore={new TaskStore(tasks)}>
    <MuiThemeProvider muiTheme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
), document.querySelector('#mount-point'));
