import * as React from 'react';
import { styled } from '@mui/material';

const InputContainer = styled ("section") ({

    display: 'flex',
    flexDirection: 'row',
    padding: "50px",
    backgroundColor: "whitesmoke",

});

const InputLeftContainer = styled ("div") ({

    width: "50%",
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "start",
    textAlign: "start",

});

const InputLabel = styled ("label") ({

    color: "black",
    display: "inline-block",

});

const InputCurrency = styled ("input") ({

    width: "100%",
    backgroundColor: "transparent",
    outline: "none",
    paddingTop: "30px",

});

const InputRightContainer = styled ("div") ({

    width: "50%",
    width: "50%",
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "end",
    textAlign: "end",

});

const InputCurrencyType = styled ("span") ({

    color: "black",
    width: "100%",

});

const InputCurrencySelect = styled ("select") ({

    outline: "none",
    backgroundColor: "whitesmoke",
    cursor: "pointer",

});

const InputCurrencyOption = styled ("option") ({


});


export default function InputSelection ({label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectedCurrency = "clp", amountDisabled = false, currencyDisabled = false, id01 = "", id02 = ""}) {
        
  return (

    <InputContainer>
        <InputLeftContainer>
            <InputLabel htmlFor={`${id01}`}>{label}</InputLabel>
            <InputCurrency id={`${id01}`}type='number' placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e)=> onAmountChange && onAmountChange (Number(e.target.value))}/>
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