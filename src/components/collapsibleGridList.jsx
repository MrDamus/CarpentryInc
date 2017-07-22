import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Databases, findObjectInDbById} from '../utils/findObjectInDbById.js';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  image: {
    maxWidth: 100,
    height: 100,
    display: 'flex-inline',
    flex: 1,
    margin: 5,
  },
  gridWrapper: {
    width: 500,
    height: 450,
    flexWrap: 'wrap',
  },
  resourceIcon: {
    maxWidth: 50,
    maxHeight: 50,
    display: 'flex',
    flex: 1,
    margin: 5,
  },
  resourcesWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  resourceText: {
    display: 'flex',
  },
  infoPopup: {
    position: 'absolute',
    top: 0,
    right: -50,
    backgroundColor: 'white',
    display: 'none',
    zIndex: 3,
  },
  wrapper: {
    position: 'relative',
  },
};

const GridList = ({data, onClick}) => {
  return (
  <div style={styles.root}>
      {data.map((element, i) => (
        <div key={i} style={styles.wrapper} >
          <img
            onMouseOver={(event) => event.target.nextSibling.style.display='block'}
            onMouseLeave={(event) => event.target.nextSibling.style.display='none'}
            style={styles.image}
            src={element.img}
            onMouseDown={() => onClick(element.id, element.price || 20)}
          />
          <div style={styles.infoPopup} >
             {element.requirements.map(({id, quantity}) => {
               const resourceData = findObjectInDbById(Databases.Resources, id);
               return (
                 <div style={styles.resourcesWrapper}>
                  <img style={styles.resourceIcon} src={resourceData ? resourceData.img : null} alt=""/>
                  <h2 style={styles.resourceText}>{`${quantity}`}</h2>
                </div>
               );
            })}
          </div>
        </div>
      ))}
  </div>
);
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (id, price = 20) => {
      dispatch({
      type: 'PRODUCTION_ELEMENT_SELECTED',
      payload: {
       id,
       price,
      }});
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GridList);
