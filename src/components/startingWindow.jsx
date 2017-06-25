import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {green400, yellow400, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';

const styles= {
  wrapper: {
    backgroundColor: 'white',
    padding: 50,
  },
  difficultyWrapper: {
    margin: 10,
  },
  button: {
    margin: 5,
  },
};

export default class StartingWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDifficulty: null,
      companyName: '',
      selectedDifficultyError: false,
      companyNameError: false,
    };
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    this.setState({companyNameError: false, selectedDifficultyError: false});
    const {companyName, selectedDifficulty} = this.state;
    const {handleStart} = this.props;
    const incorrectName = companyName.length < 3;
    if (incorrectName) {
      this.setState({companyNameError: true});
    } if (!selectedDifficulty) {
      this.setState({selectedDifficultyError: true});
    } else if (!incorrectName) {
    Store.dispatch({
      type: 'START',
      payload: {
        difficulty: selectedDifficulty,
        companyName: companyName,
      }});
      handleStart();
    }
  }

  renderButton(title, color = 'white', isStart) {
    return (
        <RaisedButton
          style={styles.button}
          backgroundColor={color}
          label={title.toUpperCase()}
          onMouseDown={(event) => {
            isStart ? this.handleStart() :
            this.setState({selectedDifficulty: title.toUpperCase()})
            }
          }
        />);
  }

render() { 
  const {selectedDifficulty, selectedDifficultyError, companyNameError} = this.state;
    return (
          <div style={styles.wrapper}>
            <h3>Choose your company name!</h3>
             <TextField
                hintText="CarpentryInc"
                floatingLabelText="Company name"
                onChange={(event, text) => this.setState({companyName: text})}
                errorText={companyNameError ? 'Company name must be longer than 3 characters!' : null}
              />
            <div style={styles.difficultyWrapper}>
                {!selectedDifficulty
                  ? <h4 style={{color: selectedDifficultyError ? 'red' : 'auto'}}>Select difficulty level</h4>
                  : <h4>{`Selected Level: ${selectedDifficulty}`}</h4>
                }
                {this.renderButton("easy", green400)}
                {this.renderButton("normal", yellow400)}
                {this.renderButton("hard", red400)}
            </div>
            {this.renderButton("start", brown400, true)}
          </div>
      );
    }
  }
