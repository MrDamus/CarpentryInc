import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {green200, yellow200, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';
import GridList from '../components/gridList';
import Subheader from 'material-ui/Subheader';
import productsDatabase from '../database/products';
import getDbObjects from '../utils/getDbObjects';
import resourceDatabase from '../database/resources';

const styles= {
  wrapper: {
    backgroundColor: 'yellow200',
    padding: 50,
  },
  difficultyWrapper: {
    margin: 10,
  },
  button: {
    margin: 5,
  },
};

const pages = {
  resources: 'RESOURCES',
  products: 'PRODUCTS',
}

class Warehouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activePage: pages.resources,
        buttons: [{
            title: pages.products,
        },
        {
            title: pages.resources,
        }],
    };
    this.changeSection = this.changeSection.bind(this);  
    this.productsArray = props.stockProducts;
  }

  changeSection(newSection) {
    this.setState({activePage: newSection})
  }

  renderButton(title, color = 'green200') {
    return (
        <RaisedButton
          onMouseDown={() => this.changeSection(title)}
          key={title}
          style={styles.button}
          backgroundColor={color}
          label={title.toUpperCase()}
        />);
  }

render() {
    const isResources = this.state.activePage === pages.resources;
    const {buttons} = this.state;
    const db = isResources ? resourceDatabase : productsDatabase;
    const array = isResources ? this.props.stockResources : this.props.stockProducts;
    const quantityArray = isResources ? this.props.quantityResources : this.props.quantityProducts;
    const data = getDbObjects(db, array);

    data.map((element) => {
      element.quantity = quantityArray[element.id];
      return element;
    });
    return (
          <div style={styles.wrapper}>
            <h2>WAREHOUSE</h2>
            <Subheader>{this.state.activePage}</Subheader>
            <GridList data={data}/>
            {buttons.map((button) => this.renderButton(button.title, green200))}
          </div>
      );
    }
  }

function mapStateToProps({warehouse}) {
  return {
    stockProducts: warehouse.stockProducts,
    quantityProducts: warehouse.quantityProducts,
    stockResources: warehouse.stockResources,
    quantityResources: warehouse.quantityResources,
  };
}

export default connect(mapStateToProps)(Warehouse);
