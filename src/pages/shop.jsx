import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {green400, yellow400, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';
import QuantitySelector from '../components/quantitySelector';

const styles= {
  wrapper: {
    backgroundColor: 'white',
    padding: 50,
  },
  button: {
    margin: 5,
  },
  productsGrid: {

  },
  productWrapper: {
    display: 'inline-flex',
    flexDirection: 'Column',
    border: '1px solid black',
    alignItems: 'center',
    margin: 10,
    width: 140,
    minHeight: 350,
    maxHeight: 350,
  },
  img: {
    height: 140,
    width: 140,
    objectFit: 'fill',
  },
  valueSelector: {
    display: 'flex',
    flexDirection: 'row',
    justifContent: 'center',
  },
  minus: {
    marginRight: 5,
    display: 'block',
    height: 20,
    width: 7,
    backgroundColor: 'brown400',
  },
  value: {
    marginRight: 5,
    display: 'block',
    height: 20,
    width: 7,
    backgroundColor: 'brown400',
  },
  text: {
    margin: 5,
  }
};

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttons: [{
            title: 'Buy',
        },
        {
            title: 'Cancel',
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

  renderValueSelctor() {
    return (
      <QuantitySelector />
    );
  }

  renderProduct(source, title, price, stock) {
    return (
        <div style={styles.productWrapper}>
            <img src={source} alt={title} style={styles.img}/>
            <h4 style={[styles.text, {}]} >{title}</h4>
            <h4 style={styles.text} >{`Price: ${price}$`}</h4>
            <h4 style={styles.text} >{`Available: ${stock}`}</h4>
            {this.renderValueSelctor()}
            {this.renderButton('Buy')}
        </div>);
  }

render() {
    const {buttons} = this.state;
    return (
      <div style={styles.productsGrid}>
        {this.props.shopItems.map((item) => this.renderProduct(item.source, item.title, item.price, item.stock))}
      </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    shopItems: state.shop.items,
  };
}

export default connect(mapStateToProps)(Shop);
