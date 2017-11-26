import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import PlayerMiniCard from './components/player-mini-card';

const player = {
  name: 'Lionel Messi',
  number: 10,
  country: 'Argentina',
  age: 30,
  position: 'Offense'
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <PlayerMiniCard  player={player}/>
      </div>
    );
  }
}

export default App;
