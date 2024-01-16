import React from 'react'
import styled from "styled-components";


const FooterContent = styled.div`
  border-top: 1px solid #798490;
  background: #FFF;
  display: flex;
  height: 40px;
  width: 100%; 
  margin: 0 auto;
  padding: 0 50px 300px 50px;
  justify-content: space-between; 
  align-items: stretch; 
   `;

const FooterColumn = styled.div`
  background-color: #FFF;
  display: flex;
  width: 240px;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 50px 300px 50px;
  flex-shrink: 0;
  margin-top: 0;
  `;

const FooterHeading = styled.h5`
  color: #0B539B;
  font-family: 'Inter, sans-serif'; 
  font-size: 16px; 
  font-style: normal;
  font-weight: 700;
  line-height: 2px;
  padding: 0 40px 0px 40px;
  
`;

const StyledParagraph = styled.p`
  color: #2B3136;
  font-family: 'Inter, sans-serif';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  padding: 0 40px 0 40px;


`;

function Footer() {
  return (
    <FooterContent>
      <FooterColumn>
        <FooterHeading>Service hotline</FooterHeading>
        <StyledParagraph>Support and counsell</StyledParagraph>
        <StyledParagraph>0180 - 000000</StyledParagraph>
        <StyledParagraph>Mon-Fri, 9 am - 5 pm</StyledParagraph>
        <StyledParagraph>Or via our contact form</StyledParagraph>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Shop Service</FooterHeading>
        <StyledParagraph>Newsletter</StyledParagraph>
        <StyledParagraph>Merchant login</StyledParagraph>
        <StyledParagraph>Contact</StyledParagraph>
        <StyledParagraph>Return</StyledParagraph>
        <StyledParagraph>Repair request</StyledParagraph>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Information</FooterHeading>
        <StyledParagraph>General terms</StyledParagraph>
        <StyledParagraph>Privacy</StyledParagraph>
        <StyledParagraph>Shipping and payment</StyledParagraph>
        <StyledParagraph>Right of rescission</StyledParagraph>
        <StyledParagraph>About</StyledParagraph>
      </FooterColumn>
    </FooterContent>
  );
}

export default Footer;