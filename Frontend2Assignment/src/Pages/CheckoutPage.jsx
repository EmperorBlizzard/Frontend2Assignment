import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import BillingAddress from "../components/sections/checkoutPage/sections/BillingAddress.jsx"; 
import ShippingAddress from "../components/sections/checkoutPage/sections/ShippingAddress.jsx";
import CheckoutCart from "../components/sections/checkoutPage/sections/CheckoutCart.jsx";
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
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StyledParagraph = styled.p`
  color: #2B3136;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledFormsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const CheckOutPage = () => {
  return (
    <>
      <Header />

      <StyledCheckout>
        <StyledH1>Complete order</StyledH1>
        <StyledH5>Terms and conditions and cancellation policy</StyledH5>
        <StyledParagraph>Please note our cancellation policy</StyledParagraph>
        <StyledFormsContainer>
        <BillingAddress />        
        <ShippingAddress />
        <CheckoutCart />
        </StyledFormsContainer>
      </StyledCheckout>

      <Footer />
    </>
  );
}

export default CheckOutPage;
