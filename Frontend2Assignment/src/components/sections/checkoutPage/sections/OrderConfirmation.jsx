import React, { useRef, useContext, useState } from "react";
import { CartContext } from "../../../../App";
import Header from "../../Header";
import Footer from "../../Footer";

const OrderConfirmation = () => {
  const { itemsInCart, setItemsInCart, totalPrice } = useContext(CartContext);

  return (
    <>
    <Header />
    <div>
      <h1>Orderbekräftelse</h1>
      <p>Totalpris: {totalPrice}</p>
    <Footer />
    </div>
    </>
  );
};

export default OrderConfirmation;




