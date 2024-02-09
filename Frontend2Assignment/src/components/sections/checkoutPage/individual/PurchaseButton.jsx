import React, { useRef, useContext } from "react";
import { CartContext } from "../../../../App";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import PutApi from "../../../../Products/PutApi"


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
  &:hover {
    background-color: #2b3136;
  }
`;

const PurchaseButton = () => {
  const form = useRef();
  const { itemsInCart, setItemsInCart } = useContext(CartContext);

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value;
    console.log("user_email:", userEmail);

    emailjs
      .sendForm("service_pxdiem5", "template_kladx0c", form.current, {
        publicKey: "fazBHO9MG1s-qOff9",
        to_email: userEmail,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          alert("Beställningen är mottagen, kvittot skickas till din e-post");
        },
        (error) => {
          console.log("FAILED...", error.text);
          form.current.reset();
          alert("Du måste ange email");
        }
      )
      .finally(() => {
        form.current.reset(); 
      });
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
        console.log(newStock);
        console.log(id);
        await PutApi(id, newStock);
      }
      setItemsInCart([]);
      sendEmail(e);
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
        <input type="submit" value="Skicka" style={{ display: "none" }} />
      </form>
      <Button onClick={handleClick}>Genomför köp</Button>
    </PurchaseContainer>
  );
};

export default PurchaseButton;
