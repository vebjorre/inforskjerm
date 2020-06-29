import React from 'react';
import './App.css';
import Reddit from './Reddit.js';
import Bikes from './Bikes.js';

const App = () => {
  return(
    <div className="App">
      <h1>Infoskjerm</h1>
      <Reddit />
      <Bikes />
    </div>
  );
};

export default App;
