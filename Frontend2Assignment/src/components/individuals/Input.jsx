import styled from "styled-components";

const InputContainer = styled.select`
	display: flex;
	height: 40px;
	padding-right: 12px;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
`;

function Input() {
	return (
		<InputContainer>
			<option value="">Name A-Z</option>
			<option value="">Name Z-A</option>
			<option value="">Pris Låg-Hög</option>
			<option value="">Pris Hög-Låg</option>
			<option value="">Mest lämpade</option>
		</InputContainer>
	);
}

export default Input;
