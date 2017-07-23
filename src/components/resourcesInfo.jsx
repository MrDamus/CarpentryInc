import React, { Component } from 'react';
import {connect} from 'react-redux';
import { brown400 } from 'material-ui/styles/colors';
import resourceDatabase from '../database/resources';
import getDbObjects from '../utils/getDbObjects';

const styles= {
  wrapper: {
    backgroundColor: brown400,
    width: 130,
    position: 'absolute',
    top: 120,
    right: 0,
    height: 200,
    color: 'white',
  },
  imgWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    maxWidth: 40,
    maxHeight: 40,
    display: 'inline-flex',
    margin: 0,
  },
  quantity: {
    display: 'inline-flex',
    margin: 7,
    paddingLeft: 10,
  },
};

class ResourcesInfo extends Component {

componentWillReceiveProps(nextProps) {
  this.forceUpdate();
}

render() {
    const {stockResources, quantityResources} = this.props;
    const data = getDbObjects(resourceDatabase, stockResources);

    data.map((element) => {
      element.quantity = quantityResources[element.id];
      return element;
    });
    return (
          <div style={styles.wrapper}>
            {/* {
              this.props.playerProperties
              .map(
                ({value, label})
                  =>
                  <h2>{label} : {value}</h2>
                )
            } */}
            {data.map(({img, quantity}) => (
            <div style={styles.imgWrapper}>
              <img style={styles.img} src={img} alt=""/>
              <h4 style={styles.quantity}>{quantity}</h4>
            </div>
            )
            )}
          </div>
      );
    }
  }

function mapStateToProps({warehouse}) {
    return {
        stockResources: warehouse.stockResources,
        quantityResources: warehouse.quantityResources,
    };
}

export default connect(mapStateToProps)(ResourcesInfo);
