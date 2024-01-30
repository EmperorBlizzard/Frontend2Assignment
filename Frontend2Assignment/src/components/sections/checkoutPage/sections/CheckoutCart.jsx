import React from "react";
import styled from "styled-components";
import PurchaseButton from "../individual/PurchaseButton";
import CheckoutCartItem from "./CheckoutCartItem";

const CheckoutCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin: 1rem; 
  margin-top: auto;
  padding: 1rem;
  gap: 1rem; 
  max-width: auto;
  height: 22rem;
  `

const CheckoutCart = ({CheckoutCartItems}) =>{
    return(
        
        <CheckoutCartContainer>
            <h2>Checkout cart</h2>
           {CheckoutCartItems && CheckoutCartItems.length >0 && CheckoutCartItems.map((item) =>(
            <CheckoutCartItem key={item.product.id} product={item.product} quantity ={item.quantity} />
        ))}
        <PurchaseButton />
        </CheckoutCartContainer>

        

    );

};
    export default CheckoutCart;