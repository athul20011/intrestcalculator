import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0);
  const [rate,setRate]=useState(0);

  const [intrest,setIntrest]=useState(0);
  console.log(amount,year,rate);

  const calculate=(e)=>{
  const output=amount*year*rate/100;
  setIntrest(output)
}
const reset=(e)=>{
  setAmount(0);
  setRate(0);
  setYear(0);
  setIntrest(0);
}

  
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple Intrest Calculator</h1>
          <p>Calculate your simple intrest with us❤️</p>
        </div>
        <div className="total">
          <h2>₹ {intrest}</h2>
          <p>Your Total Intrest</p>
        </div>
        <div className="form">
          <form>
            <div className="input">
            <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount"  variant="outlined" /><br />
            <TextField id="outlined-basic" value={year||""} onChange={(e)=>setYear(e.target.value)} label="Year" variant="outlined" /><br />
            <TextField id="outlined-basic" value={rate||""} onChange={(e)=>setRate(e.target.value)} label="Rate" variant="outlined" /><br />
            </div>
            <Button style={{background:'black',margin:'20px'}} variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
            <Button style={{color:'black',margin:'20px'}} variant="outlined" onClick={e=>reset(e)}>Reset</Button>
          </form>
        </div>
      </div>
    </div>
  );
  }
export default App;
