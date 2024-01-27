import styled from 'styled-components';

const StyledAddressButton = styled.button`
    background-color: #EEEEEE;
    color: #2B3136;
    display: flex;
    padding: 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1rem;
    cursor: pointer;

    @media (min-width: 48rem){
    max-width: 10rem;
    padding: 1.5rem;
  }
`;

function AddressButton() {
    return (
        <StyledAddressButton type="submit">Submit</StyledAddressButton>
    );
}

export default StyledAddressButton;
