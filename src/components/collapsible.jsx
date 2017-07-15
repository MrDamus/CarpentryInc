import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {green400, yellow400, red400, brown400} from 'material-ui/styles/colors';
import Store from '../redux/store';
import CollapsibleGridList from './collapsibleGridList';

const styles= {
  wrapper: {
    backgroundColor: 'white',
    width: 350,
  },
  button: {
    margin: 10,
  },
  collapsible: {
    height: '100%',
    maxWidth: 350,
    backgroundColor: brown400,
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
    styles.collapsible.display = expanded ? 'flex' : 'none';
    return (
          <div style={styles.wrapper}>
            <RaisedButton
              fullWidth
              style={styles.button}
              backgroundColor={'white'}
              label={this.props.title.toUpperCase()}
              onMouseDown={this.handleExpandChange}
            />
            <div style={styles.collapsible} >
              <CollapsibleGridList data={this.props.gridData} havePlaceholders={false} />
            </div>
          </div>
      );
    }
  }
