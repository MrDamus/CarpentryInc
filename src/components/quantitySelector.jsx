import React, { Component } from 'react';

const styles= {
  wrapper: {
    width: 100,
    height: 50,
    display: 'flex',
    justifyContent: 'center', 
    display: 'inline-flex',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
  },
};

const operations = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
};

export default class QuantitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 1,
    };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(operation) {
    const {value} = this.state;
    let newValue;
    switch (operation) {
    case operations.decrement:
      newValue = value - 1;
      break;
    case operations.increment:
      newValue = value + 1;
      break;
}

    this.setState({value: newValue});
  };

render() {
    return (
        <div style={styles.wrapper}>
          <img style={styles.image} src="http://www.icone-png.com/png/16/16358.png" alt="" onMouseDown={() => this.handlePress(operations.decrement)}/>
            <div>
              <h2>{this.state.value}</h2>
            </div>
          <img style={styles.image} src="http://www.freeiconspng.com/uploads/plus-icon-black-2.png" alt="" onMouseDown={() => this.handlePress(operations.increment)}/>
        </div>
      );
    }
  }
