import React from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const gridSpace = 12;
const placeholder = {
          img: 'http://halfbit.com/wp-content/uploads/2014/09/placeholder.png',
        };
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    display: 'inline-flex',
    flex: 1,
    margin: 5,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    flex: 1,
    margin: 5,
  },
  gridWrapper: {
    width: 500,
    height: 450,
    flexWrap: 'wrap',
  },
};

const GridList = ({data}) => {
  const dataLength = data.length;
  const placeholderArray = Array(gridSpace-dataLength).fill(placeholder);
  data = data.concat(placeholderArray);
  return (
  <div style={styles.root}>
      <Subheader>Stcok</Subheader>
    <div style={styles.gridWrapper}>
      {data.map((element, i) => (
        <div key={i} style={styles.imageWrapper} >
          <img key={i} style={styles.image} src={element.img} />
          <h4 style={{position: 'absolute', bottom: 0, right: 0}} >{element.quantity}</h4>
        </div>
      ))}
    </div>
  </div>
);
};

export default GridList;
