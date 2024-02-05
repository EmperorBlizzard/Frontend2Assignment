import styled from "styled-components";

const StyledAddressButton = styled.button`
 
  padding: 1.5rem;
  gap: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1rem;
  cursor: pointer;
  background-color: #0b539b;
  color: #fff;

  &:hover {
    background-color: #2b3136
  }
`;

function AddressButton() {
  return <StyledAddressButton type="submit">Skicka</StyledAddressButton>;
}

export default AddressButton;
