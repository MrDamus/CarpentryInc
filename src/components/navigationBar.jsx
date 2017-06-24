import React, { Component } from 'react';

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
  icon: {
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
  }
}



export default class Navbar extends Component {
  navigationButton() {
    return(
      <div style={styles.icon}>
        Icon
      </div>
    );
  }
  render() {
    return(
      <div style={styles.wrapper}>
        {this.navigationButton()}
        {this.navigationButton()}
        <div style={styles.title}>
          <h2>{this.props.title}</h2>
        </div>
        {this.navigationButton()}
        {this.navigationButton()}
      </div>
    )
  } 
}