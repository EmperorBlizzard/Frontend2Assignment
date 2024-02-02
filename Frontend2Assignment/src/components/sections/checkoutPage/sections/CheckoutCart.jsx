import React from "react";
import styled from "styled-components";
import PurchaseButton from "../individual/PurchaseButton";
import CheckoutCartItem from "./CheckoutCartItem";

const CheckoutCartContainer = styled.div`
    max-width: 35rem;
    margin: 1rem; 
    padding: 1rem;
    gap: 1rem;  
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CheckoutCart = ({ CheckoutCartItems }) => {
  console.log("Rendering CheckoutCart"); 

  const hasItemsInCart = CheckoutCartItems && CheckoutCartItems.length > 0;
  return (
    <CheckoutCartContainer>
      <h2>Checkout cart</h2>
      {hasItemsInCart ? (
        CheckoutCartItem.map((item) => (
          <CartContainer key={item.product.id} product={item.product} quantity={item.quantity} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
       

      <ButtonContainer>
        <PurchaseButton />
      </ButtonContainer>
    </CheckoutCartContainer>
  );
};

export default CheckoutCart;
