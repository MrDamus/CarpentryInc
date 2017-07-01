import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {green400, yellow400, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';
import Collapsible from '../components/collapsible';

const styles= {
  wrapper: {
    backgroundColor: 'white',
    padding: 50,
  },
  button: {
    margin: 5,
  },
};

export default class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttons: [{
            title: 'chair',
        },
        {
            title: 'table',
        }],
        furnitures: [{
          img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
        },
        ],
        houseComponents: [{
          img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
        },
        {
          img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
        },
        {
          img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
        },
          {
          img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
        },
        {
          img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
        },
          {
          img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
        },
        {
          img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
        },
        ],
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

render() {
    const {buttons} = this.state;
    return (
          <div style={styles.wrapper}>
            <Collapsible title={'Furniture'} gridData={this.state.furnitures}/>
            <Collapsible title={'House Components'} gridData={this.state.houseComponents}/>
            {buttons.map((button) => this.renderButton(button.title))}
          </div>
      );
    }
  }
