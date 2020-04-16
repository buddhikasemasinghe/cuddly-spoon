import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './CountryList';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h1>🦁 My Covid 19 Dashboard with Apollo Client 🙈</h1>
         <HomePage />
         <CountryList />
      </header>
    </div>
  );
}

export default App;
