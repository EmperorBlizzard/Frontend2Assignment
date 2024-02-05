import React, { useContext, useState } from "react";
import { CartContext } from "../../../../App";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: #0b539b;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 4px;
  gap: 1 px;

  &:hover {
    background-color: #2b3136;
  }
`

const QuantityButton = ({ productId }) => {
    const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleIncrease = () => {
        increaseQuantity(productId);
    };

    const handleDecrease = () => {
        decreaseQuantity(productId);
    };

    return (
        <ButtonContainer>
            <StyledButton onClick={handleDecrease}>-</StyledButton>
            <StyledButton onClick={handleIncrease}>+</StyledButton>
        </ButtonContainer>
    );
};

export default QuantityButton;