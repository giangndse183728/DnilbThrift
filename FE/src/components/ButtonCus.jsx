import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Styled Button Component with Two Borders
const StyledButton = styled(Button)({
  position: 'relative',
  padding: '10px 30px',
  border: '2px solid black',  // Outer border color
  borderRadius: '0',
  overflow: 'hidden',
  backgroundColor: 'transparent',  // Adjust background as needed
  color: 'black',  // Button text color

  cursor: 'pointer',
  transition: 'all 0.3s ease',  // Smooth transition

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '4px',   // Adjust as needed
    left: '4px',  // Adjust as needed
    right: '4px',
    bottom: '4px',
    border: '2px solid gray',  // Inner border color
    zIndex: -1,
    transition: 'all 0.3s ease',  // Smooth transition
  },

  '&:hover::before': {
    borderColor: 'rgba(150, 1, 1, 1)',  // Inner border color on hover
  },
});

const DoubleBorderButton = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default DoubleBorderButton;
