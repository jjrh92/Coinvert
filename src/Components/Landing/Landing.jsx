import * as React from 'react';
import { useState } from "react";
import { styled, Button } from '@mui/material';
import Input from './Input/Input';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
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

  '@media (max-width: 500px)': {

    flexDirection: "column", 
    
  }

});

const WelcomeText = styled ("h1") ({

  color: "lightyellow",
  fontSize: "30px",
  userSelect: "none",
  fontFamily: "Helvetica",

});

const Form = styled ("form") ({


});

const ButtonContainer = styled ("div") ({

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',

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

    if (amount === "") {

      alert ("Nothing to convert, please enter a number on the amout field");

    }

    else {

      setConvertedAmount (amount * currencyInfo[to]);

    }


  }

  return (

    <LandingContainer>
      <WelcomeText>Welcome to Coinvert!</WelcomeText>
      <InOutContainer>
        <Form autoComplete='off' onSubmit={(e) => {

          e.preventDefault (

            convert ()

          );

        }}>

          <Input label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setFrom (currency)} onAmountChange={(amount) => setAmount(amount)} selectedCurrency={from} id01='InputCurrency01' id02='InputCurrencySelect01' />

          <ButtonContainer>
            <Button title='Swap Values' color='success' variant="contained" onClick={swap} sx={{backgroundColor:"green", color: "lightyellow", fontWeight: "bold", fontSize: "15px", marginBottom: "14px",}}><SwapVertIcon/>Swap Values</Button>
          </ButtonContainer>

          <Input label="To" amount={convertedAmount} onCurrencyChange={(currency) => setTo(currency)} selectedCurrency={to} amountDisabled={true} currencyOptions={options} id01='InputCurrency02' id02='InputCurrencySelect02'/>

          <ButtonContainer>
            <Button color='success' variant='contained' type='submit' sx={{backgroundColor:"green", color: "lightyellow", fontWeight: "bold", fontSize: "15px"}}>Convert {amount} {from.toUpperCase()}<CurrencyExchangeIcon sx={{marginLeft: "7px", marginRight: "7px"}}/>{to.toUpperCase()}</Button>
          </ButtonContainer>


        </Form>
      </InOutContainer>

    </LandingContainer>

  );

}