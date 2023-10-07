import * as React from 'react';
import { styled } from '@mui/material';
import Input from './Input/Input';
import Output from './Output/Output';
import Result from './Result/Result';

const LandingContainer = styled ("main") ({

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'lightgreen',
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

  return (

    <LandingContainer>
      <InOutContainer>
        <Input />
        <Output />
      </InOutContainer>
      <Result />
    </LandingContainer>

  );

}