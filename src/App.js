import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css'
import Typography from '@mui/material/Typography';
import { useState } from 'react';


const App = () => {
  const [p,setP] =useState(0);
  const [t,sett] =useState(0);
  const [r,setr] =useState(0);
  const [si,setsi] =useState(0);

  const calculateInterest = () => {
    setsi((p*t*r)/100);
  }
  return (
    <div className = "div">
      <AppBar position="static">
        <Toolbar>
        Simple Interest
        </Toolbar>
      </AppBar>
      <br/>
      <TextField onChange ={(event) => setP(event.target.value)} id="outlined-basic" label="Enter Principal" variant="outlined" />
      <TextField onChange ={(event) => sett(event.target.value)} id="outlined-basic" label="Enter Time" variant="outlined" />
      <TextField onChange ={(event) => setr(event.target.value)} id="outlined-basic" label="Enter Rate" variant="outlined" />
      <br/><br/>
      <Button onClick = {()=> {calculateInterest()}} variant="contained">Calculate</Button>
      <br/>
      <Typography variant="h6" gutterBottom>
         Simple Interest is {si}
      </Typography>
    </div>
  );
}

export default App;
