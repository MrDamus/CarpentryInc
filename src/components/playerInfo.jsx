import React, { Component } from 'react';
import {connect} from 'react-redux';
import { brown500 } from 'material-ui/styles/colors';

const styles= {
  wrapper: {
    backgroundColor: brown500,
    width: 350,
    position: 'absolute',
    top: 120,
    left: 0,
    height: 200,
    color: 'white',
  },
};

class PlayerInfo extends Component {

componentWillReceiveProps(nextProps) {
  this.forceUpdate();
}

render() {
    return (
          <div style={styles.wrapper}>
            {this.props.playerProperties.map(({value, label}) => <h2>{label} : {value}</h2>)}
          </div>
      );
    }
  }

function mapStateToProps({profile}) {
    return {
        playerProperties: profile.playerProperties,
        money: profile.playerProperties[0].value,
    };
}

export default connect(mapStateToProps)(PlayerInfo);
