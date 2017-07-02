import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {green200, yellow200, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';
import GridList from '../components/gridList';

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
    return (
          <div style={styles.wrapper}>
            <h2>WAREHOUSE</h2>
            <GridList data={this.props.stock}/>
            {buttons.map((button) => this.renderButton(button.title, green200))}
          </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    stock: state.warehouse.stock,
  };
}

export default connect(mapStateToProps)(Warehouse);
