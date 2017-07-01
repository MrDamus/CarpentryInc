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
  collapsible: {
    height: 200,
    width: 100,
    backgroundColor: 'red',
  },
};

export default class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
        expanded: false,
    };
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleExpandChange() {
    this.setState({expanded: !this.state.expanded});
  };

render() {
    const {expanded} = this.state;
    console.warn(expanded)
    styles.collapsible.display = expanded ? 'flex' : 'none';
    console.warn(styles.collapsible)
    return (
          <div style={styles.wrapper}>
            <RaisedButton
              style={styles.button}
              backgroundColor={'white'}
              label={this.props.title.toUpperCase()}
              onMouseDown={this.handleExpandChange}
            />
            <div style={styles.collapsible} />
          </div>
      );
    }
  }
