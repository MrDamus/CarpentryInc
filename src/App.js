import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navigationBar';
import StartingWindow from './components/startingWindow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './redux/store';

const styles= {
  contentWrapper: {
    backgroundColor: 'green',
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 700,
    display: 'flex',
  },
};

class App extends Component {
  constructor(props) {
    super();
    this.state= {
      startPopupVisoble: true,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div className="App" >
            <NavigationBar />
            <div style={styles.contentWrapper}>
              { this.state.startPopupVisoble ?
                <StartingWindow handleStart={() => this.setState({startPopupVisoble: false})}/>
                : null
              }
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
