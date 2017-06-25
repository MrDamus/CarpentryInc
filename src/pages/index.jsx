import React, { Component } from 'react';
import '../App.css';
import NavigationBar from '../components/navigationBar';
import StartingWindow from '../components/startingWindow';
import {blueGrey100} from 'material-ui/styles/colors';

const styles= {
  contentWrapper: {
    backgroundColor: blueGrey100,
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 700,
    display: 'flex',
  },
};

class Body extends Component {
  constructor(props) {
    super();
    this.state= {
      startPopupVisoble: true,
      selectedPage: null,
    };
  }

  render() {
    const {selectedPage} = this.state;
    const Page = selectedPage;
    return (
      <div className="App" >
        <NavigationBar onClick={(pageComponent) =>
          this.setState({selectedPage: pageComponent})
          }
        />
        <div style={styles.contentWrapper}>
            {selectedPage ? <Page /> : null}
            { this.state.startPopupVisoble ?
            <StartingWindow handleStart={() => this.setState({startPopupVisoble: false})}/>
            : null
            }
        </div>
      </div>
    );
  }
}

export default Body;