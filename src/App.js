import React from 'react';
import './App.css';
import Reddit from './Reddit.js';
import Bikes from './Bikes.js';
import Clock from './Clock';

const App = () => {
  return(
    <div className="App">
      <h1>Infoskjerm</h1>
      <Clock />
      <Reddit />
      <Bikes />
    </div>
  );
};

export default App;
