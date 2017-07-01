import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {green400, yellow400, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';
import Collapsible from '../components/collapsible';

const styles= {
  wrapper: {
    backgroundColor: 'white',
    padding: 50,
  },
  button: {
    margin: 5,
  },
};

export default class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttons: [{
            title: 'chair',
        },
        {
            title: 'table',
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
            <Collapsible title={'Furniture'}/>
            <Collapsible title={'House Components'}/>
            {buttons.map((button) => this.renderButton(button.title))}
          </div>
      );
    }
  }
