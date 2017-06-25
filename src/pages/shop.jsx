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
  button: {
    margin: 5,
  },
};

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttons: [{
            title: 'Buy',
        },
        {
            title: 'Cancel',
        }],
    };
  }

  renderButton(title, color = 'white') {
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
