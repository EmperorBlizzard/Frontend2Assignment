import React from 'react'
import styled from "styled-components";

const StyledFooter = styled.div({
  borderTop: '1px solid var(--Border-Default, #798490)',
  background: 'var(--Generic-White, #FFF)',
  display: 'flex',
  width: '100%', 
  justifyContent: 'space-between', 
  alignItems: 'center',
  gap: 40,
})

const FooterHeading = styled.h5({ 
  color: '#0B539B',
  fontFamily: 'Inter, sans-serif', 
  fontSize: '16px', 
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '21px'
})

const StyledParagraph = styled.p({
color: '#2B3136',
fontFamily: 'Inter, sans-serif',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: 400,
lineHeight: '21px'
})

function Footer() {
  return (
    <StyledFooter>
      <div>
        <FooterHeading>Service hotline</FooterHeading>
        <p>Support and counsell</p>
        <p>0180 - 000000</p>
        <p>Mon-Fri, 9 am - 5 pm</p>
        <p>Or via our contact f</p>
      </div>

      <div>
        <FooterHeading>Shop Service</FooterHeading>
        <p>Newsletter</p>
        <p>Merchant login</p>
        <p>Contact</p>
        <p>Return</p>
        <p>Repair request</p>
      </div>

      <div>
        <FooterHeading>Information</FooterHeading>
        <p>General terms</p>
        <p>Privacy</p>
        <p>Shipping and payment</p>
        <p>Right of rescission</p>
        <p>About</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;