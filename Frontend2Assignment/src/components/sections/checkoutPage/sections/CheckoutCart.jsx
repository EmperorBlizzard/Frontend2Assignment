import React from "react";
import styled from "styled-components";
import PurchaseButton from "../individual/PurchaseButton";
import CheckoutCartItem from "./CheckoutCartItem";

const CheckoutCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%; 
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  width: 55.625rem;
  gap: 1.25rem;
  padding: 0.625rem;
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