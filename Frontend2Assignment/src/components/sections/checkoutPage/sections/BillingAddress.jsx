import React, { useState } from "react";
import AddressButton from "../individual/AddressButton";
import styled from "styled-components";

const AddressButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7rem;
  margin-top: 1.5rem; 
  
`;

const StyledForm = styled.form`
display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;

  h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
   
  }

  @media (max-width: 37.5rem) {
    flex-direction: column;
  }
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const BillingAddressForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalcode: "",
    city: "",
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };


  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Fakturaadress</h3>

      <StyledLabel>
        Förnamn:
        <StyledInput
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        Efternamn:
        <StyledInput
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        Adress:
        <StyledInput
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        Postkod:
        <StyledInput
          type="text"
          name="postalcode"
          value={formData.postalcode}
          onChange={handleChange}
        />
        Stad:
        <StyledInput
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </StyledLabel>

      <AddressButtonWrapper>
        <AddressButton type="submit">Skicka</AddressButton>
      </AddressButtonWrapper>
    </StyledForm>
  );
};

export default BillingAddressForm;
