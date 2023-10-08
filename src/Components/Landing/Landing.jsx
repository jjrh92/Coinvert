import * as React from 'react';
import { useState } from "react";
import { styled } from '@mui/material';
import Input from './Input/Input';
import useCurrencyInfo from '../../Hooks/useCurrencyInfo';

const LandingContainer = styled ("main") ({

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundImage: `url(https://images.pexels.com/photos/8254439/pexels-photo-8254439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingLeft: "15px",
  paddingRight: "15px",
  height: "100vh",
  gap: "30px",

  '@media (max-width: 500px)': {


    flexDirection: "column", 
    
  }

});

const InOutContainer = styled ("section") ({

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'lightgreen',

  '@media (max-width: 500px)': {

    flexDirection: "column", 
    
  }

});

export default function Landing () {

  const [amount, setAmount] = useState ("");
  const [from, setFrom] = useState ("clp");
  const [to, setTo] = useState ("vef");
  const [convertedAmount, setConvertedAmount] = useState (0);
  const currencyInfo = useCurrencyInfo (from);
  const options = Object.keys (currencyInfo)

  const swap = () => {

    setFrom (to);
    setTo (from);
    setConvertedAmount (amount);
    setAmount (convertedAmount);

  }

  const convert = () => {

    setConvertedAmount (amount * currencyInfo[to]);

  }

  return (

    <LandingContainer>
      <InOutContainer>

        <form autoComplete='off' onSubmit={(e) => {
          e.preventDefault(
            convert()
          )
        }}>

          <Input label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setFrom (currency)} onAmountChange={(amount) => setAmount(amount)} selectedCurrency={from} id01='InputCurrency01' id02='InputCurrencySelect01' />

          <button onClick={swap}>Swap</button>

          <Input label="To" amount={convertedAmount} onCurrencyChange={(currency) => setTo(currency)} selectedCurrency={to} amountDisabled={true} currencyOptions={options} id01='InputCurrency02' id02='InputCurrencySelect02'/>

        <button type='submit'>Convert {amount} {from.toUpperCase()} ➡️ {to.toUpperCase()}</button>
        </form>
      </InOutContainer>

    </LandingContainer>

  );

}