import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {green400, yellow400, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';

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
  },
  img: {
    height: 100,
    width: 100,
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
      <div style={styles.valueSelector}>
        <div style={styles.minus}>- </div>
        <div style={styles.value}> 0 </div>
        <div style={styles.plus}> +</div>
      </div>
    );
  }

  renderProduct(source, title, price, stock) {
    return (
        <div style={styles.productWrapper}>
            <img src={source} alt={title} style={styles.img}/>
            <h4>{title}</h4>
            <h4>{`Price: ${price}$`}</h4>
            <h4>{`Available: ${stock}`}</h4>
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
    availableMoney: state.profile.playerProperties[0].value,
  };
}

export default connect(mapStateToProps)(Shop);
