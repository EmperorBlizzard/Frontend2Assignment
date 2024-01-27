
import React, { useState } from 'react';
import StyledAddressButton from '../individual/AddressButton';
import styled from 'styled-components'

const StyledForm = styled.form`
    max-width: 400px;
    margin: 0 auto; 
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 8px,
`;

const StyledInput = styled.input `
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
`;


const ShippingAddressForm = () => {
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

      <h3>Shipping address</h3>
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

export default ShippingAddressForm;