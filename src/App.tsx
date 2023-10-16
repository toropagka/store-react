import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import { Theme } from './styles/Theme';

function App() {
  return (
    <Theme>
      <div className='App'>
        <header className='header'>
          <img className='header-logo' src={logo} alt='logo'></img>
          <div className='header-search'>
            <span className='header-search__text'>Catalog</span>
            <input type='text' />
          </div>
          <button>Log In/ Sign Up</button>
        </header>
      </div>
    </Theme>
  );
}

export default App;
