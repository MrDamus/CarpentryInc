import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {green200, yellow200, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';

const styles= {
  wrapper: {
    backgroundColor: 'yellow200',
    padding: 50,
  },
  difficultyWrapper: {
    margin: 10,
  },
  button: {
    margin: 5,
  },
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttons: [{
            title: 'Home',
        },
        {
            title: 'Bank',
        }],
    };
  }

  renderButton(title, color = 'green200') {
    return (
        <RaisedButton
          key={title}
          style={styles.button}
          backgroundColor={color}
          label={title.toUpperCase()}
        />);
  }

render() {
    const {buttons} = this.state;
    return (
          <div style={styles.wrapper}>
            {buttons.map((button) => this.renderButton(button.title))}
          </div>
      );
    }
  }
