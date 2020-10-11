import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ifsc from './searchByIfsc/ifsc';
import Navigation from './navigation.js';

function App() {
  return (
    <div >
      <Navigation></Navigation>
      <header className="App-header">
        <strong>Welcome to the bank application!</strong>
      </header>
    </div>
  );
}

export default App;
