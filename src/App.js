import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileList from './components/profile-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our Message Board</h1>
        </header>
        <ProfileList/>
      </div>
    );
  }
}

export default App;
