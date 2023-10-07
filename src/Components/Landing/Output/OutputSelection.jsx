import * as React from 'react';
import { styled } from '@mui/material';

const OutputSelectionContainer = styled ("div") ({

    display: 'flex',
    flexDirection: 'row',

});

const OutputSelectionBox = styled ("div") ({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "400px",

});


const OutputSelectionLabel = styled ("span") ({

    color: "green",
    fontSize: "30px", 
    fontWeight: "bold",
    paddingRight: "10px",
    userSelect: "none",

	'@media (max-width: 500px)': {

        fontSize: "25px", 
        
	}
    
    
});

const OutputSelectionSelect = styled ("select") ({

    color: "green",
    fontSize: "30px", 
    fontWeight: "bold",
    height: "36px",
    backgroundColor: "lightgreen",
    outline: "none",
    border: "none",
    userSelect: "none",

});

const OutputSelectionOption = styled ("option") ({

    color: "green",
    fontWeight: "bold",

});


export default function OutputSelection() {

    
  return (

    <OutputSelectionContainer>

    <OutputSelectionBox>

        <OutputSelectionLabel id='SelectionLabel' className='SelectionLabel' htmlFor="SelectionLabel">Converted to:</OutputSelectionLabel>

        <OutputSelectionSelect id='SelectionSelect' className='SelectionSelect'>
            <OutputSelectionOption value="CLP">CLP</OutputSelectionOption>
            <OutputSelectionOption value="USD">USD</OutputSelectionOption>
            <OutputSelectionOption value="EUR">EUR</OutputSelectionOption>
            <OutputSelectionOption value="MXN">MXN</OutputSelectionOption>
            <OutputSelectionOption value="UYU">UYU</OutputSelectionOption>
            <OutputSelectionOption value="COP">COP</OutputSelectionOption>
            <OutputSelectionOption value="ARS">ARS</OutputSelectionOption>
            <OutputSelectionOption value="VEF">VEF</OutputSelectionOption>
        </OutputSelectionSelect>

        <OutputSelectionLabel id='OutputSelectionLabel' className='OutputSelectionLabel' htmlFor="OutputSelectionSelect">?</OutputSelectionLabel>


    </OutputSelectionBox>

    </OutputSelectionContainer>

  );
}