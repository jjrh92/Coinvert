import * as React from 'react';
import { styled } from '@mui/material';
import "./Input.css";

const InputContainer = styled ("section") ({

    display: 'flex',
    flexDirection: 'row',
    padding: "50px",
    backgroundColor: "transparent",
    border: "1px solid steelblue",
    borderRadius: "15px",
    boxShadow: "2px 1px 1px 1px steelblue",
    marginBottom: "14px",
    gap: "30px",

});

const InputLeftContainer = styled ("div") ({

    width: "50%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'column',
    flexWrap: "wrap",
    gap: "5px",


});

const InputLabel = styled ("label") ({

    color: "lightyellow",
    display: "inline-block",
    fontSize: "30px",
    userSelect: "none",
    fontFamily: "Helvetica",

});

const InputCurrency = styled ("input") ({

    backgroundColor: "lightyellow",
    outline: "none",
    height: "30px",
    color: "steelblue",
    border: "1px solid transparent",
    borderRadius: "5px",
    fontFamily: "Helvetica",
    fontSize: "30px",
    cursor: "pointer",
    width: "100%",

    '::placeholder': {

        color: "steelblue",

    },   

});

const InputRightContainer = styled ("div") ({

    width: "50%",
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
    flexDirection: 'column',
    flexWrap: "wrap",
    gap: "5px",

});

const InputCurrencyType = styled ("span") ({

    color: "black",
    width: "100%",
    fontFamily: "Helvetica",
    fontSize: "30px",
    color: "lightyellow",
    userSelect: "none",
    textAlign: "end",

});

const InputCurrencySelect = styled ("select") ({

    outline: "none",
    cursor: "pointer",
    fontFamily: "Helvetica",
    fontSize: "20px",
    color: "steelblue",
    backgroundColor: "lightyellow",
    border: "1px solid transparent",
    height: "35px",
    width: "50%",
    borderRadius: "5px",
    textTransform: "uppercase",

});

const InputCurrencyOption = styled ("option") ({


});

export default function InputSelection ({label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectedCurrency = "clp", amountDisabled = false, currencyDisabled = false, id01 = "", id02 = ""}) {
        
  return (

    <InputContainer>
        <InputLeftContainer>
            <InputLabel htmlFor={`${id01}`}>{label}</InputLabel>
            <InputCurrency id={`${id01}`} type='number' placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e)=> onAmountChange && onAmountChange (Number(e.target.value))} autoFocus min={0}/>
        </InputLeftContainer>

        <InputRightContainer>
            <InputCurrencyType>Currency</InputCurrencyType>

            <InputCurrencySelect id={`${id02}`} value={selectedCurrency} onChange={(e) => {onCurrencyChange && onCurrencyChange (e.target.value)}} disabled={currencyDisabled}>{currencyOptions.map((currency) => (

                <InputCurrencyOption key={currency} value={currency}>{currency}</InputCurrencyOption>
                
            ))}</InputCurrencySelect>

        </InputRightContainer>
    
    </InputContainer>

  );
}