import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {green400, yellow400, red400, brown400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Store from '../redux/store';

const styles= {
  wrapper: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 50,
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  difficultyWrapper: {
    margin: 10,
  },
  button: {
    margin: 5,
  },
  profileInfoWrapper: {
    margin: 20,
  },
  innerProgressBar: {
    height: 40,
    backgroundColor: 'red',
  },
  progressBar: {
    display: 'inline-flex',
    height: 40,
    width: 200,
    backgroundColor: 'blue',
  },
  skillLabel: {
    display: 'inline-flex',
    marginRight: 20,
  },
  skillBarWrapper: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
  },
  achievementsWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  achievementImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        buttons: [{
            title: 'accept',
        },
        {
            title: 'dismiss',
        }],
    };
  }

  renderButton(title, color = 'purple') {
    return (
        <RaisedButton
          key={title}
          style={styles.button}
          backgroundColor={color}
          label={title.toUpperCase()}
        />);
  }

  renderStatistic(label, value) {
    return (
        <h2>{`${label}: ${value}`}</h2>);
  }

   renderSkillBar(label, value) {
     styles.innerProgressBar.width = value;
    return (
      <div style={styles.skillBarWrapper}>
        <h2 style={styles.skillLabel} >{label}</h2>
        <div style={styles.progressBar}>
          <div style={styles.innerProgressBar}/>
        </div>
      </div>
      );
  }

  renderAchievement(label, image) {
    return (
      <div style={styles.achievement}>
        <img style={styles.achievementImage} src={image} alt={label}/>
      </div>
      );
  }

render() {
    const {buttons} = this.state;
    return (
          <div style={styles.wrapper}>
            <h2>Profile</h2>
            <div style={styles.innerWrapper}>
            <div style={styles.profileInfoWrapper} >
              <img src="http://www.mobil-online.hu/Content/Images/avatar-default_1.png" alt="Avatar"/>
              {this.props.playerProperties.map((s) => this.renderStatistic(s.label, s.value))}
              <h2>Skills</h2>
              {this.props.skills.map((s) => this.renderSkillBar(s.label, s.value))}
            </div>
            <div style={styles.profileInfoWrapper} >
              <h2>Statistics</h2>
               {this.props.statistics.map((s) => this.renderStatistic(s.title, s.value))}
              <h2>Achievements</h2>
              <div style={styles.achievementsWrapper}>
               {this.props.achievements.map((s) => this.renderAchievement(s.label, s.image))}
              </div>
            </div>
          </div>
          {buttons.map((button) => this.renderButton(button.title))}
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    skills: state.profile.skills,
    statistics: state.profile.statistics,
    playerProperties: state.profile.playerProperties,
    achievements: state.profile.achievements,
  };
}

export default connect(mapStateToProps)(Profile);
