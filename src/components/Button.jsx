// ...existing code...
import React from 'react'
import styled from 'styled-components';

const Button = ({buttonText, buttonColor}) => {
  return (
    <StyledButton $buttonColor={buttonColor}>{buttonText}</StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
    background-color: ${(props) => props.$buttonColor || props.theme.colors.blue};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 13px;
    
    &:hover {
        background-color: ${(props) => props.theme.colors.darkBlue};
    }
`;