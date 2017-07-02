import React, {Component} from 'react';
import { connect } from 'react-redux'
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionCircle from 'material-ui/svg-icons/action/account-circle';
import ActionShop from 'material-ui/svg-icons/action/shopping-cart';
import ActionBuild from 'material-ui/svg-icons/action/build';
import Store from '../redux/store';
import {brown700, brown500, blueGrey100} from 'material-ui/styles/colors';
import Workshop from '../pages/workshop';
import Home from '../pages/home';
import Shop from '../pages/shop';
import Profile from '../pages/profile';

const styles= {
  wrapper: {
    backgroundColor: brown700,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    maxHeight: 100,
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    padding: 10,
  },
  iconConatiner: {
    margin: 10,
    maxWidth: 80,
    height: 80,
    backgroundColor: blueGrey100,
    flex: 1,
    display: 'inline-flex',
  },
  title: {
    flex: 3,
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    margin: 5,
    width: 70,
    height: 70,
  },
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      companyName: props.companyName,
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({companyName: nextProps.companyName})
  }

  navigationButton(element, page) {
    const {companyName} =this.props;
    const isEnabled = companyName !== '';
    const Myicon = element;
    styles.iconConatiner.backgroundColor = blueGrey100;
    return (
      <div
        style={styles.iconConatiner}
        onMouseDown={() => {
          isEnabled ? this.props.onClick(page) : null;
          }}
        >
        {<Myicon style={styles.icon} color={brown500}/>}
      </div>
    );
  }

  render() {
    return (
      <div style={styles.wrapper}>
        {this.navigationButton(ActionHome, Home)}
        {this.navigationButton(ActionCircle, Profile)}
        <div style={styles.title}>
          <h2>{this.state.companyName}</h2>
        </div>
        {this.navigationButton(ActionBuild, Workshop)}
        {this.navigationButton(ActionShop, Shop)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {companyName: state.profile.companyName};
}


export default connect(mapStateToProps)(Navbar);
