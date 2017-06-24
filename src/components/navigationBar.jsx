import React, {Component} from 'react';
import { connect } from 'react-redux'
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionCircle from 'material-ui/svg-icons/action/account-circle';
import ActionShop from 'material-ui/svg-icons/action/shopping-cart';
import ActionBuild from 'material-ui/svg-icons/action/build';
import Store from '../redux/store';

const styles= {
  wrapper: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    maxHeight: 100,
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    padding: 10,
  },
  iconConatiner: {
    margin: 10,
    maxWidth: 80,
    height: 80,
    backgroundColor: 'yellow',
    flex: 1,
    display: 'inline-flex',
  },
  title: {
    flex: 3,
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    margin: 5,
    width: 70,
    height: 70,
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      companyName: props.companyName,
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({companyName: nextProps.companyName})
  }

  navigationButton(element) {
    const Myicon = element;
    return (
      <div style={styles.iconConatiner}>
        {<Myicon style={styles.icon}/>}
      </div>
    );
  }
  render() {
    return (
      <div style={styles.wrapper}>
        {this.navigationButton(ActionHome)}
        {this.navigationButton(ActionCircle)}
        <div style={styles.title}>
          <h2>{this.state.companyName}</h2>
        </div>
        {this.navigationButton(ActionBuild)}
        {this.navigationButton(ActionShop)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {companyName: state.companyName};
}


export default connect(mapStateToProps)(Navbar);
