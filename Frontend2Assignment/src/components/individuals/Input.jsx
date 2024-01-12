import styled from "styled-components";

const InputContainer = styled.select({
	display: 'flex',
height: '40px',
paddingRight: '12px',
justifyContent: 'space-between',
alignItems: 'center',
alignSelf: 'stretch',
});

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
