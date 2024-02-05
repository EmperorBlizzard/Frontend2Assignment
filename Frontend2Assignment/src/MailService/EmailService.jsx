import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const EmailService = () => {
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
					alert("mailet skickat som planerat");
				},
				(error) => {
					console.log("FAILED...", error.text);
					form.current.reset();
					alert("Det gick inte som planerat, vänligen kontakta vår kundtjänst");
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
			<input type="submit" value="Send" />
		</StyledForm>
	);
};
