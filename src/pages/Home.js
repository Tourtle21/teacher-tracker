import React, {Component} from 'react';
import * as firebase from 'firebase';

class Home extends React.Component {

  state = {
    speed: 10
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })
  }

  render() {
    return (
      <h1>{this.state.speed}</h1>
    );
  }
}

export default Home;
