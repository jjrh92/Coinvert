import React from 'react'
import { styled } from '@mui/material';
import OutputSelection from './OutputSelection';

const OutputContainer = styled ("section") ({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
});
  

function Input () {

  return (

    <OutputContainer>

      <OutputSelection />
        
    </OutputContainer>

  )

}

export default Input