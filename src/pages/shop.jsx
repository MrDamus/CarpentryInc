import React, { Component } from 'react';
import { connect } from 'react-redux';
import {green400, yellow400, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';
import QuantitySelector from '../components/quantitySelector';
import getDbObjects from '../utils/getDbObjects';
import resourceDatabase from '../database/resources';


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
    width: 140,
    minHeight: 400,
    maxHeight: 400,
    marginTop: 'auto',
    marginRight: 10,
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
    minHeight: 30,
    maxHeight: 30,
    laneHeight: 15,
    margin: 10,
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
            <h4 style={styles.text} >{title}</h4>
            <h4 style={styles.text} >{`Price: ${price}$`}</h4>
            <h4 style={styles.text} >{`Available: ${stock}`}</h4>
            <QuantitySelector money={this.props.availableMoney} price={price} title={title} id={id} />
        </div>);
  }

render() {
    const data = getDbObjects(resourceDatabase, this.props.shopItemsIdsArray);
    data.map((element) => {
      element.stock = 10;
      return element;
    });
    return (
      <div style={styles.productsGrid}>
        {data.map(({img, title, price, stock, id}) => this.renderProduct(img, title, price, stock, id))}
      </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    shopItemsIdsArray: state.shop.items,
    availableMoney: state.profile.playerProperties[0].value,
  };
}

export default connect(mapStateToProps)(Shop);
