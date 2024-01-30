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
    console.log("Rendering CheckoutCart");

    const hasItemsInCart = CheckoutCartItems && CheckoutCartItems.length > 0;
    return(
        
        <CheckoutCartContainer>
            <h2>Checkout cart</h2>
           {hasItemsInCart ?(
            CheckoutCartItem.map((item) => (
            <CartContainer key={item.product.id} product ={item.product} quantity ={item.quantity} />
            ))

           ) : (
            <p>Your cart is empty</p>
        )}

        <PurchaseButton />
        </CheckoutCartContainer>      

    );

};
    export default CheckoutCart;