import styled from "styled-components";

const SubTotalContainer = styled.div`
display: flex;
width: 9.375rem;
align-items: flex-start;
color: var(--Typestyle-Headlines, #2B3136);
font-feature-settings: 'clig' off, 'liga' off;

/* Body/Regular */
font-family: Inter;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.3125rem; /* 150% */
`;

const CartSubtotal = ({ quantity, pricePerItem }) => {
    const subtotal = quantity * pricePerItem;
    
  
    return (
      <SubTotalContainer>
        <h2>Summa: kr</h2>
        <p>{formatCurrency(subtotal)}: kr</p>
      </SubTotalContainer>
    );
  };
  
  const formatCurrency = (amount) => {
    const options = { style: 'currency', currency: 'SEK' };
    return new Intl.NumberFormat('sv-SE', options).format(amount);
  };
  
  export default CartSubtotal;