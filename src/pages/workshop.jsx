import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  actionsWrapper: {
    flexDirection: 'row',
    display: 'flex',
  },
  collapsibleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
  button: {
    margin: 5,
  },
};

class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttons: [{
            title: 'produce',
        },
        {
            title: 'show details',
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

renderActions(title, actionsArray) {
  return (
    <div key={title} style={styles.collapsibleWrapper}>
      <h3>{title}</h3>
      {actionsArray.map((e, i) =>
      <Collapsible key={i} title={e.title} gridData={e.data}/>)}
    </div>
  );
}

render() {
    const {buttons} = this.state;
    return (
          <div style={styles.wrapper}>
            <div style={styles.actionsWrapper}>
              {this.props.actions.map((action) => this.renderActions(action.title, action.data))}
            </div>
            {buttons.map((button) => this.renderButton(button.title))}
          </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    actions: state.production.actions,
  };
}

export default connect(mapStateToProps)(Workshop);
