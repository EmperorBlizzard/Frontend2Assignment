import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	font-family: "Inter", sans-serif;
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
			<label>Namn</label>
			<input type="text" name="user_name" />
			<label>E-mail</label>
			<input type="email" name="user_email" />
			<label>Meddelande</label>
			<textarea name="message" />
			<input id="btn" type="submit" value="Skicka" />
			<ToastContainer/>
		</StyledForm>
	);
};






