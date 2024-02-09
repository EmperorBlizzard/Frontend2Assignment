import React, { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../App";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import PutApi from "../../../../Products/PutApi";

const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  margin: 1rem;
`;

const Button = styled.button`
  display: flex;
  height: 3rem;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
  background-color: #0b539b;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 2rem;
  border-radius: 0.7rem;
  cursor: pointer;
`;

const PurchaseButton = () => {
  const form = useRef();
  const navigate = useNavigate();

  const { itemsInCart, setItemsInCart, totalPrice } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userEmail = form.current.user_email.value;

    try {
      await emailjs.sendForm(
        "service_pxdiem5",
        "template_kladx0c",
        form.current,
        {
          publicKey: "fazBHO9MG1s-qOff9",
          to_email: userEmail,
          total: totalPrice,
          itemsInCart: itemsInCart,
        }
      );
      console.log("SUCCESS!");

      if (form.current) {
        form.current.reset();
      }
      alert("Beställningen är mottagen, kvittot skickas till din e-post");
    } catch (error) {
      console.log("FAILED...", error.text);
      alert("Något gick fel vid skickandet av e-post");
    }

    setLoading(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      for (const element of itemsInCart) {
        let newStock = element.stock - element.amountOfProducts;
        const id = element.id;
        if (newStock <= 0) {
          newStock = 0;
        }
        await PutApi(id, newStock);
      }
  
      await sendEmail(e);
      navigate("/orderconfirmation", { state: { itemsInCart, totalPrice } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PurchaseContainer>
      <form ref={form} onSubmit={sendEmail}>
        <p>Namn:</p>
        <input type="text" name="user_name" />
        <p>Email:</p>
        <input type="email" name="user_email" />
        <input type="hidden" name="itemsInCart" />
        <input type="hidden" name="totalPrice" />
        <input type="submit" value="Skicka" style={{ display: "none" }} />
      </form>
      <Button onClick={handleClick} disabled={loading}>
        {loading ? "Skickar..." : "Genomför köp"}
      </Button>
    </PurchaseContainer>
  );
};

export default PurchaseButton;
