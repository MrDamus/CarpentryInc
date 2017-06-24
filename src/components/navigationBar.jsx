import React, { Component } from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionCircle from 'material-ui/svg-icons/action/account-circle';
import ActionShop from 'material-ui/svg-icons/action/shopping-cart';
import ActionBuild from 'material-ui/svg-icons/action/build';

const styles= {
  wrapper: {
    backgroundColor: 'red',
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
    backgroundColor: 'yellow',
    flex: 1,
    display: 'inline-flex',
  },
  title: {
    flex: 3,
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    margin: 5,
    width: 70,
    height: 70,
  }
}



export default class Navbar extends Component {
  navigationButton(element) {
    const Myicon = element;
    return(
      <div style={styles.iconConatiner}>
        {<Myicon style={styles.icon}/>}
      </div>
    );
  }
  render() {
    return(
      <div style={styles.wrapper}>
        {this.navigationButton(ActionHome)}
        {this.navigationButton(ActionCircle)}
        <div style={styles.title}>
          <h2>{this.props.title}</h2>
        </div>
        {this.navigationButton(ActionBuild)}
        {this.navigationButton(ActionShop)}
      </div>
    )
  } 
}