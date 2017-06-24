import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navigationBar';
import StartingWindow from './components/startingWindow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles= {
  contentWrapper: {
    backgroundColor: 'green',
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 700,
    display: 'flex',
  }
}

class App extends Component {
  constructor(props) {
    super()
    this.state= {
      title: '',
    }
  } 

  render() {
    return (
      <MuiThemeProvider>
        <div className="App" >
          <NavigationBar title={this.state.title} />
          <div style={styles.contentWrapper}>
            <StartingWindow />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
