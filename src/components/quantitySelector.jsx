import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';


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
  button: {
    margin: 5,
  },
};

const operations = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
};

class QuantitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 1,
    };
    this.handlePress = this.handlePress.bind(this);
    this.onBuy = this.onBuy.bind(this);
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

  onBuy() {
    if (this.props.price * this.state.value > this.props.money) {
      // TODO: display popup
      console.warn("Sorry, you can't afford that!");
    } else {
      this.props.buyResource(this.props.id, this.state.value, this.props.price * this.state.value);
    }
  }

render() {
    return (
      <div>
        <div style={styles.wrapper}>
          <img style={styles.image} src="http://www.icone-png.com/png/16/16358.png" alt="" onMouseDown={() => this.handlePress(operations.decrement)}/>
            <div>
              <h2>{this.state.value}</h2>
            </div>
          <img style={styles.image} src="http://www.freeiconspng.com/uploads/plus-icon-black-2.png" alt="" onMouseDown={() => this.handlePress(operations.increment)}/>
        </div>
        <RaisedButton
          onMouseDown={() => this.onBuy()}
          key={'Buy'}
          style={styles.button}
          backgroundColor={'white'}
          label={'Buy'}
        />
      </div>
     );
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    buyResource: (id, quantity, totalPrice) => {
      dispatch({
      type: 'BUY_RESOURCE',
      payload: {
       id, quantity, totalPrice,
      }});
    },
  };
}
export default connect(null, mapDispatchToProps)(QuantitySelector);

