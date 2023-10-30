import React from 'react';
import logo from './assets/logo.png';
import StyledApp from './App.styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import {  OutlinedInput } from '@mui/material';

function App() {
  return (
    <StyledApp>
      <header className="header">
        {/* <img className="header-logo" src={logo} alt="logo"></img>
        <div className="header-search">
          <span className="header-search__text">Catalog</span>
          <input type="text" />
        </div> */}
        {/* <Button variant="contained">Log In/ Sign Up</Button> */}
        <TextField id="outlined-basic" hiddenLabel variant="outlined" multiline placeholder="Share a comment" />
        <OutlinedInput  ></OutlinedInput>
      </header>
    </StyledApp>
  );
}

export default App;
