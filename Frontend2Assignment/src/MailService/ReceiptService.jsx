import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const ReceiptService = () => {
  const form = useRef();

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
          alert("Något gick fel, kontakta vår kundtjänst");
        }
      );
  };

  return (
    <>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <label>Namn</label>
        <input type="text" name="user_name" />
        <label>E-mail</label>
        <input type="email" name="user_email" />
        <input type="submit" value="Skicka" />
      </StyledForm>
    </>
  );
};

export default ReceiptService;