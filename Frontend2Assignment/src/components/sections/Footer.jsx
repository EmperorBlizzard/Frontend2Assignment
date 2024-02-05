import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterContent = styled.div`
  border-top: 1px solid #798490;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.25 rem;
`;

const FooterColumn = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  flex-shrink: 0;
  width: 100%;

  @media (min-width: 48rem) {
    width: 15rem;
  }
`;

const FooterHeading = styled.h5`
  color: #0b539b;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.125rem;
  margin-bottom: 0.625rem;
`;

const StyledParagraph = styled.p`
  color: #2b3136;
  font-family: "Inter", sans-serif;
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
        <StyledParagraph>Support och rådgivning</StyledParagraph>
        <StyledParagraph>0180 - 000000</StyledParagraph>
        <StyledParagraph>Mån-fre, 9.00 - 17.00</StyledParagraph>
        <StyledParagraph>Eller via vårt kontaktformulär</StyledParagraph>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Butiksservice</FooterHeading>
        <StyledParagraph>Nyhetsbrev</StyledParagraph>

        <NavLink to="/contactpage">
          <StyledParagraph>Kontakt</StyledParagraph>
        </NavLink>
        <NavLink to="/returnpage">
          <StyledParagraph>Returer</StyledParagraph>
        </NavLink>
        <StyledParagraph>Reparationer</StyledParagraph>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Information</FooterHeading>

        <NavLink to="/termsandconditionspage">
          <StyledParagraph>Villkor</StyledParagraph>
        </NavLink>

        <NavLink to="/deliverypage">
          <StyledParagraph>Leverans</StyledParagraph>
        </NavLink>

        <NavLink to="/AboutPage">
          <StyledParagraph>Om oss</StyledParagraph>
        </NavLink>
      </FooterColumn>
    </FooterContent>
  );
}

export default Footer;
