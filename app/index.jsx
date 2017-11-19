import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import injectTap from 'react-tap-event-plugin';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

import { App } from './views';

import {
  TaskStore,
  UIStore,
} from './stores';

import { tasks } from './constants/initial-data';

import theme from './constants/mui-theme';

import './styles/main.scss';

injectTap();
useStrict(true);

ReactDOM.render((
  <Provider
    taskStore={new TaskStore(tasks)}
    uiStore={new UIStore()}
  >
    <MuiThemeProvider muiTheme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
), document.querySelector('#mount-point'));
