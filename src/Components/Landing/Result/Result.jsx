import * as React from 'react';
import { styled } from '@mui/material';
import { useContext } from 'react';
import CurrencyContext from '../../../Context/Context';

const ResultContainer = styled ("div") ({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "400px",

});

const ResultText = styled ("span") ({

    color: "green",
    fontSize: "30px", 
    fontWeight: "bold",
    paddingRight: "10px",
    userSelect: "none",

	'@media (max-width: 500px)': {

        fontSize: "25px", 
        
	}
    
});

export default function Result () {

    const {data} = useContext (CurrencyContext)


    function mostrarContext () {

        let ResultText = document.querySelector(".ResultContainer")
        ResultText.innerText = data.data;
        ResultContainer.appendChild(texto);

        
    }
    
  return (

    <ResultContainer className='ResultContainer'>
        <button onClick={mostrarContext}>Calcular</button>
        <ResultText id='ResultText' className='ResultText' htmlFor="ResultText">That is equal:</ResultText>
    </ResultContainer>

  );
}