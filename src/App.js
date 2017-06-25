import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './redux/store';

import Body from './pages/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Body />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
