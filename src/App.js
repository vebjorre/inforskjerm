import React from 'react';
import Bikes from './Bikes.js';
import Clock from './Clock';
import Reddit from './Reddit.js';
import './styles/App.css';

const App = () => {
  return(
    <div className="App">
      <h1>Hello there!</h1>
      <Clock />
      <Reddit />
      <Bikes />
    </div>
  );
};

export default App;
