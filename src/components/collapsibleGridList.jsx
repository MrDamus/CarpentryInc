import React from 'react';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
};

const GridList = ({data}) => {
  return (
  <div style={styles.root}>
      {data.map((element, i) => (
          <img key={i} style={styles.image} src={element.img} />
      ))}
  </div>
);
};

export default GridList;
