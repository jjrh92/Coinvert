import * as React from 'react';
import { styled } from '@mui/material';
import "./input.css";

const InputContainer = styled ("section") ({

    display: 'flex',
    flexDirection: 'row',
    padding: "50px",
    backgroundColor: "green",
    border: "1px solid yellow",
    borderRadius: "15px",
    boxShadow: "1px 1px 2px 2px black",
    marginBottom: "14px",

});

const InputLeftContainer = styled ("div") ({

    width: "50%",
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "start",
    textAlign: "start",
    gap: "15px",

});

const InputLabel = styled ("label") ({

    color: "lightyellow",
    display: "inline-block",
    fontSize: "30px",
    userSelect: "none",
    fontFamily: "Helvetica",

});

const InputCurrency = styled ("input") ({

    width: "100%",
    backgroundColor: "green",
    outline: "none",
    height: "30px",
    color: "lightyellow",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderBottom: "1px solid lightgreen",
    borderLeft: "1px solid lightgreen",
    fontFamily: "Helvetica",
    fontSize: "30px",
    cursor: "pointer",

    '::placeholder': {

        color: "lightyellow",

    },   

});

const InputRightContainer = styled ("div") ({

    width: "50%",
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "end",
    textAlign: "end",

});

const InputCurrencyType = styled ("span") ({

    color: "black",
    width: "100%",
    fontFamily: "Helvetica",
    fontSize: "20px",
    color: "lightyellow",
    userSelect: "none",

});

const InputCurrencySelect = styled ("select") ({

    outline: "none",
    cursor: "pointer",
    fontFamily: "Helvetica",
    textTransform: "uppercase",
    fontSize: "20px",
    color: "lightyellow",
    backgroundColor: "green",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderBottom: "1px solid lightgreen",
    borderLeft: "1px solid lightgreen",

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
            <InputCurrencyType>Currency Type</InputCurrencyType>

            <InputCurrencySelect id={`${id02}`} value={selectedCurrency} onChange={(e) => {onCurrencyChange && onCurrencyChange (e.target.value)}} disabled={currencyDisabled}>{currencyOptions.map((currency) => (

                <InputCurrencyOption key={currency} value={currency}>{currency}</InputCurrencyOption>
                
            ))}</InputCurrencySelect>

        </InputRightContainer>
    
    </InputContainer>

  );
}