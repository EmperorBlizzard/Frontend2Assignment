import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;

  label {
    margin-bottom: 1rem;
  }

  input[type="text"],
  input[type="email"],
  input[type="submit"] {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
   
    &:focus {
      outline: none;
      border-color: #0b539b; /* Example color, change as needed */
    }
  }

  input[type="submit"] {
    background-color: #0b539b; 
    color: #fff;
    cursor: pointer;
    
    &:hover {
      background-color: #2b3136; 
    }
  }
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
        <p>Kvitto</p>
        <p>Namn:</p>
        <input type="text" name="user_name" />
        <p>Email:</p>
        <input type="email" name="user_email" />
        <input type="submit" value="Skicka" />
      </StyledForm>
    </>
  );
};

export default ReceiptService;