import * as React from 'react';
import { styled } from '@mui/material';

const InputSelectionContainer = styled ("div") ({

    display: 'flex',
    flexDirection: 'row',

});

const InputSelectionBox = styled ("div") ({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "400px",

});

const InputQuantityInput = styled ("input") ({

    color: "green",
    fontSize: "30px", 
    fontWeight: "bold",
    height: "30px",
    width: "25%",
    backgroundColor: "lightgreen",
    outline: "none",
    border: "none",
    fontFamily: "serif",

});

const InputQuantityLabel = styled ("label") ({

    color: "green",
    fontSize: "30px", 
    fontWeight: "bold",
    paddingRight: "10px",
    userSelect: "none",

	'@media (max-width: 500px)': {

        fontSize: "25px", 
        
	}
    
    
});

const InputSelectionInput = styled ("select") ({

    color: "green",
    fontSize: "30px", 
    fontWeight: "bold",
    height: "36px",
    backgroundColor: "lightgreen",
    outline: "none",
    border: "none",
    userSelect: "none",

});

const InputSelectionOption = styled ("option") ({

    color: "green",
    fontWeight: "bold",

});

export default function InputSelection () {

    
  return (

    <InputSelectionContainer>

    <InputSelectionBox>

        <InputQuantityLabel id='InputQuantityLabel' className='InputQuantityLabel' htmlFor="InputQuantityInput">How much is:</InputQuantityLabel>
        <InputQuantityInput id='InputQuantityInput' className='InputQuantityInput' defaultValue='1' type='text' inputMode='numeric'></InputQuantityInput>

        <InputSelectionInput id='SelectionInput' className='SelectionInput'>
            <InputSelectionOption value="CLP">CLP</InputSelectionOption>
            <InputSelectionOption value="USD">USD</InputSelectionOption>
            <InputSelectionOption value="EUR">EUR</InputSelectionOption>
            <InputSelectionOption value="MXN">MXN</InputSelectionOption>
            <InputSelectionOption value="UYU">UYU</InputSelectionOption>
            <InputSelectionOption value="COP">ARS</InputSelectionOption>
            <InputSelectionOption value="ARS">ARS</InputSelectionOption>
            <InputSelectionOption value="VEF">VEF</InputSelectionOption>
        </InputSelectionInput>

    </InputSelectionBox>


    </InputSelectionContainer>

  );
}