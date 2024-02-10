import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledForm = styled.form`
	display: flex;
	padding: 0;
	flex-direction: column;
	font-family: "Inter", sans-serif;
	max-width: 800px;
	min-width: 400px;
	/* margin: 0; */
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
		margin: .7rem auto;
		width: 40%;
		
	}
	input {
		height: 1.5rem;
		width: 90%;
		
	}
	textarea {
		width: 90%;
		height: 6rem;
	}

	input,textarea {
		margin-top: 1rem;
	} 
`;

export const EmailService = () => {
	const notify = (mess) => toast(mess);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_pq629jd", "contact_form", form.current, {
				publicKey: "HE-AZx8JS3qIYmGb8",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					form.current.reset();
					notify("E-posten skickad som planerat")
				},
				(error) => {
					console.log("FAILED...", error.text);
					form.current.reset();
					notify("E-posten gick inte iväg")
				}
			);
	};

	return (
		<StyledForm ref={form} onSubmit={sendEmail}>
			<input type="text" name="user_name" placeholder="Namn" />
			<input type="email" name="user_email" placeholder="E-mail" />
			<textarea name="message" placeholder="Meddelande"/>
			<input id="btn" type="submit" value="Skicka" />
			<ToastContainer/>
		</StyledForm>
	);
};






