import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Friend from './components/FriendList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friend />
      </div>
    );
  }
}

export default App;
