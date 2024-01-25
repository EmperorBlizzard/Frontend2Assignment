import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import styled from "styled-components";

const StyledCheckout = styled.div`
  display: flex;
  width: 55.9375rem;
  flex-direction: column;
  padding: 10rem;
  gap: 3rem;
`;

const StyledH1 = styled.div`
  font-family: 'Inter', sans-serif;
  color: #2B3136;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
`;

const StyledH5 = styled.h5`
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem;
  border-bottom: ${(props) => (props.hasBorder ? '1px solid #798490' : 'none')};
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.color};
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function CheckOutPage() {
  return (
    <>
      <Header />

      <StyledCheckout>
        <StyledH1>Complete order</StyledH1>
        <StyledH5>Terms and conditions and cancellation policy</StyledH5>
        <StyledParagraph color="#0B539B">Please note our cancellation policy</StyledParagraph>
        <StyledH5>Billing address</StyledH5>
        <StyledH5>Shipping address</StyledH5>
      </StyledCheckout>

      <Footer />
    </>
  );
}

export default CheckOutPage;
