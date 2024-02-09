import styled from "styled-components";
import React, { useState } from "react";

const StyledPaymentMethod = styled.div`
 
    margin: 1rem; 
    padding: 1rem;
    gap: 1rem;  
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 1rem;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    

   

  input {
    margin-right: 1rem;
  }

  label {
    margin-right: 1rem;
  }
`;

const PaymentMethod = () => {
  const [paymentMethod, setPayment] = useState("");

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  return (
    <div>
      <StyledPaymentMethod>
        <h2>Betalningssätt</h2>
        <div>
          <input
            type="radio"
            name="paymentMethod"
            value="Card"
            onChange={(e) => handlePaymentChange(e)}
          />
          <label htmlFor="card">Betalkort</label>
        </div>

        <div>
          <input
            type="radio"
            name="paymentMethod"
            value="Invoice"
            onChange={(e) => handlePaymentChange(e)}
          />
          <label htmlFor="invoice">Faktura</label>
        </div>

        <div>
          <input
            type="radio"
            name="paymentMethod"
            value="Klarna"
            onChange={(e) => handlePaymentChange(e)}
          />
          <label htmlFor="klarna">Klarna</label>
        </div>
      </StyledPaymentMethod>
    </div>
  );
};

export default PaymentMethod;
