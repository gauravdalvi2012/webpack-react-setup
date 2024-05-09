import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <>
      <img src={logo} alt="logo" style={{ height: 300 + 'px' }}></img>
      <h1>Webpack + React Setup</h1>
    </>
  );
};

export default App;
