import React, { useContext } from "react";
import { CartContext } from "../../../../App";
import styled from "styled-components";
import Header from "../../Header";
import Footer from "../../Footer";
import ProductCardCheckout from "./ProductCardCheckout";

const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

const OrderConfirmationHeader = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const OrderConfirmationText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2rem;
`;

const TotalPrice = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
`;

const OrderConfirmation = () => {
  const { itemsInCart, totalPrice } = useContext(CartContext);

  return (
    <OrderConfirmationContainer>
      <Header />
      <OrderConfirmationHeader>Orderbekräftelse</OrderConfirmationHeader>
      <OrderConfirmationText>
        Tack för ditt köp och välkommen åter!
      </OrderConfirmationText>
      <ProductList>
        {itemsInCart.map((item) => (
          <ProductCardCheckout key={item.id} card={item} />
        ))}
      </ProductList>
      <TotalPrice>Totalpris: {totalPrice}</TotalPrice>
      <Footer />
    </OrderConfirmationContainer>
  );
};

export default OrderConfirmation;
