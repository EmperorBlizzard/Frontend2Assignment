import styled from 'styled-components';

const StyledAddressButton = styled.button`
    background-color: #EEEEEE;
    color: #2B3136;
    padding: 1.5rem;
    
    gap: 0.5rem;
    
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1rem;
    cursor: pointer; 
`;

function AddressButton() {
    return (
        <StyledAddressButton type="submit">Submit</StyledAddressButton>
    );
}

export default StyledAddressButton;
