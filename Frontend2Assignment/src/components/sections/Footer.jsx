import styled from "styled-components";
import { NavLink } from "react-router-dom";


const FooterContent = styled.div`
  border-top: 1px solid #798490;
  background: #FFF;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between; 
  padding: 1.25 rem;  
   `;

const FooterColumn = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  flex-shrink: 0;
  width: 100%;

  @media (min-width: 48rem){
    width: 15rem;
  }
  `;

const FooterHeading = styled.h5`
  color: #0B539B;
  font-family: 'Inter', sans-serif;
  font-size: 1rem; 
  font-style: normal;
  font-weight: 700;
  line-height: 0.125rem;
  margin-bottom: 0.625rem;
  
`;

const StyledParagraph = styled.p`
  color: #2B3136;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.625rem;
  
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
        
        <NavLink to="/contactpage">
          <StyledParagraph>Contact</StyledParagraph>
        </NavLink>
        <NavLink to="/returnpage">
          <StyledParagraph>Returns</StyledParagraph>
        </NavLink>     
        <StyledParagraph>Repair request</StyledParagraph>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Information</FooterHeading>

        <NavLink to="/termsandconditionspage"> 
        <StyledParagraph>Terms and Conditions</StyledParagraph>
        </NavLink>
        
        <NavLink to="/deliverypage">    
        <StyledParagraph>Delivery</StyledParagraph>
        </NavLink> 

        <StyledParagraph>About</StyledParagraph>
      </FooterColumn>
    </FooterContent>
  );
}

export default Footer;