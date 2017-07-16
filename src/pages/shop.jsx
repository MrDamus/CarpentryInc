import React, { Component } from 'react';
import { connect } from 'react-redux';
import {green400, yellow400, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';
import QuantitySelector from '../components/quantitySelector';

const styles= {
  wrapper: {
    backgroundColor: 'white',
    padding: 50,
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

  renderProduct(source, title, price, stock, id) {
    return (
        <div style={styles.productWrapper}>
            <img src={source} alt={title} style={styles.img}/>
            <h4 style={[styles.text, {}]} >{title}</h4>
            <h4 style={styles.text} >{`Price: ${price}$`}</h4>
            <h4 style={styles.text} >{`Available: ${stock}`}</h4>
            <QuantitySelector money={this.props.availableMoney} price={price} title={title} id={id} />
        </div>);
  }

render() {
    const {buttons} = this.state;
    return (
      <div style={styles.productsGrid}>
        {this.props.shopItems.map(({source, title, price, stock, id}) => this.renderProduct(source, title, price, stock, id))}
      </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    shopItems: state.shop.items,
    availableMoney: state.profile.playerProperties[0].value,
  };
}

export default connect(mapStateToProps)(Shop);
