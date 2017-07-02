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
  actionsWrapper: {
    flexDirection: 'row',
    display: 'flex',
  },
  collapsibleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
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
            title: 'produce',
        },
        {
            title: 'show details',
        }],
        actionsWood: [
        {
          title: 'Furnitures',
          data: [{
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
          }],
        },
        {
          title: 'House Components',
          data: [{
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
          },
          {
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
          },
          {
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
          },
          ],
        },
        {
          title: 'Garden',
          data: [{
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
          },
         ],
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

renderActions(title, actionsArray) {
  return (
    <div style={styles.collapsibleWrapper}>
      <h3>{title}</h3>
      {actionsArray.map((e) =>
      <Collapsible title={e.title} gridData={e.data}/>)}
    </div>
  );
}

render() {
    const {buttons} = this.state;
    return (
          <div style={styles.wrapper}>
            <div style={styles.actionsWrapper}>
              {this.renderActions('Wood', this.state.actionsWood)}
              {this.renderActions('Metal', this.state.actionsWood)}
            </div>
            {buttons.map((button) => this.renderButton(button.title))}
          </div>
      );
    }
  }
