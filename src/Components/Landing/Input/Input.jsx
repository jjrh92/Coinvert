import React from 'react'
import { styled } from '@mui/material';
import InputSelection from './InputSelection';

const InputContainer = styled ("section") ({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
});
  

function Input () {

  return (

    <InputContainer>

      <InputSelection />
        
    </InputContainer>

  )

}

export default Input