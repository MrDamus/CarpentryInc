import React, { Component } from 'react';

const styles= {
   button: {
      border: '2px solid white',
      margin: 10,
      maxWidth: 70,
      height: 50,
      flex: 1,
      display: 'inline-flex',
      
   },
  
};

export default class Navbar extends Component {
  navigationButton() {
    return(
      <div style={styles.button}>
        
      </div>
    );
  }

render() {
    return (
          <div>
            <h3>Choose your company name!</h3>
            <input style={{}} onInput={input => this.setState({title: input.nativeEvent.path[0].value})} />
            <div>
                {this.navigationButton()}
                {this.navigationButton()}
                {this.navigationButton()}
            </div>
            {this.navigationButton()}
          </div>
      );
    }
  }