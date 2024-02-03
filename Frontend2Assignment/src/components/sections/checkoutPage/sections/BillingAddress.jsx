
import React, { useState } from 'react';
import StyledAddressButton from '../individual/AddressButton';
import styled from 'styled-components'

const StyledForm = styled.form`
    margin: 1rem; 
    padding: 1rem;
    gap: 1rem;  

    display: flex;
    align-items: flex-start;
    margin-top: 5rem;
    flex-direction: column;
    

     
  `;

const StyledLabel = styled.label`
    
    margin-bottom: 0.5rem,
`;

const StyledInput = styled.input `
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
`;


const BillingAddressForm = () => {
  const [formData, setFormData] = useState({
    
    firstName: '',
    lastName: '',
    address: '',
    postalcode: '',
    city: '',
    
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    
   };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
    
      <h3>Billing address</h3>
      <StyledLabel>
        First name:
        <StyledInput type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        Last name:
        <StyledInput type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        Adress:
        <StyledInput type="text" name="address" value={formData.address} onChange={handleChange} />
        City: 
        <StyledInput type="text" name="city" value={formData.city} onChange={handleChange} />
        Postalcode:
        <StyledInput type="text" name="postalcode" value={formData.postalcode} onChange={handleChange} />
      </StyledLabel>
      <StyledAddressButton type="submit">Submit</StyledAddressButton>
      
      </StyledForm>
  );
};

export default BillingAddressForm;