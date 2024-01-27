import styled from 'styled-components';

const StyledAddressButton = styled.button`
    background-color: #EEEEEE;
    color: #2B3136;
    display: flex;
    height: 2.5rem;
    padding: 0rem 0.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.3125rem;
    cursor: pointer;
`;

function AddressButton() {
    return (
        <StyledAddressButton type="submit">Submit</StyledAddressButton>
    );
}

export default StyledAddressButton;
