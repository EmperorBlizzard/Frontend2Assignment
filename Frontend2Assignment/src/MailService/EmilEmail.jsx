import React from 'react'
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
	flex-direction: column;
	font-family: "Inter", sans-serif;
  width: 15rem;
	#btn {
		display: flex;
		height: 44px;
		padding: 0px 14px;
		justify-content: center;
		align-items: center;
		gap: 8px;
		align-self: stretch;
		background-color: #0b539b;
		color: #fff;
		font-size: 18px;
		font-weight: 600;
		line-height: 20px;
		border-radius: 0.7rem;
		cursor: pointer;
		margin: .7rem 0;
	}
	input {
		height: 1.5rem;
	}
`

function EmilEmail() {

  const form = useRef();

  const userEmail = form.current.user_email.value;
  

  const parameter = {
    to_name: userEmail,
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4o15d99", "template_7hkvg3k", form.current, {
      publicKey: "2fQd1ls2aTPoQHDm0",
      parameter
    }).then(function(response) {
      console.log("SUCCESS!", response.status, response.text)
      form.current.reset();
      alert("Successfully sent a email")
    },function(error){
      console.log("FAILED...", error);
      alert("Failed to send email")
    })
  }

  return (
    <>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <label>Namn</label>
        <input type="text" name="to_name" />
        <label>E-mail</label>
        <input type="email" name="user_email" />
        <label>Meddelande</label>
        <textarea name="message" />
        <input id="btn" type="submit" value="Skicka" />
      </StyledForm>
    </>
    
  )
}

export default EmilEmail