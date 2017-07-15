import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {green200, yellow200, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';
import GridList from '../components/gridList';
import productsDatabase from '../database/products';
import getDbObjects from '../utils/getDbObjects';

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

class Warehouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttons: [{
            title: 'Tools',
        },
        {
            title: 'Resources',
        }],
    };
    this.productsArray = props.stock;
  }

  renderButton(title, color = 'green200') {
    return (
        <RaisedButton
          key={title}
          style={styles.button}
          backgroundColor={color}
          label={title.toUpperCase()}
        />);
  }

render() {
    const {buttons} = this.state;
    const data = getDbObjects(productsDatabase, this.productsArray);
    data.map((element) => {
      element.quantity = this.props.quantity[element.id];
      return element;
    });
    return (
          <div style={styles.wrapper}>
            <h2>WAREHOUSE</h2>
            <GridList data={data}/>
            {buttons.map((button) => this.renderButton(button.title, green200))}
          </div>
      );
    }
  }

function mapStateToProps({warehouse}) {
  return {
    stock: warehouse.stock,
    quantity: warehouse.quantity,
  };
}

export default connect(mapStateToProps)(Warehouse);
