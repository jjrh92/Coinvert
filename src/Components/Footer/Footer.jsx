import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const FooterContainer = styled ("footer") ({

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderTop: "1px solid yellow",
    borderBottom: "2px solid black",
    height: "60px",
    paddingLeft: "15px",
    paddingRight: "15px",

});

export default function Footer () {

  return (
    
    <FooterContainer>

      <Button draggable="false" variant='text' target='_blank' rel='noopener noreferrer' href='https://www.jjrh92.dev' sx={{color: "lightyellow", fontSize: "16px", fontWeight: "bold"}}>2023 | jjrh92.dev</Button>

    </FooterContainer>

  );

}