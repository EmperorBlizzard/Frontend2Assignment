import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import BillingAddress from "../components/sections/checkoutPage/sections/BillingAddress.jsx"; 
import ShippingAddress from "../components/sections/checkoutPage/sections/ShippingAddress.jsx";
import CheckoutCart from "../components/sections/checkoutPage/sections/CheckoutCart.jsx";
import styled from "styled-components";

const StyledCheckout = styled.div`
  
  max-width: 55.9375rem;
  width: 100%;
  margin: 5rem;
  display: flex;  
  flex-direction: column; // Lodrätt på standard (mindre skärmar)
  margin-bottom: 2rem;

  
  
  @media (min-width: 48rem) {
    flex-direction: row; // Vågrätt på stora skärmar
  }
`;

const SectionContainerText = styled.div`
  
  display: flex;
  align-self: flex-start;
  margin-bottom: 2rem;
  
 
`; 

const SectionContainerBilling = styled.div`
  
  display: flex;
  align-items: flex-end;
  margin-top: 5rem;
  
  
  
`;

const SectionContainerShipping = styled.div`
  display: flex;
  align-items: flex-end;
  
  
 
`;

const SectionContainerCart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  
   
`;

const CheckOutPage = () => {
  return (
    <>
      <Header />

      <StyledCheckout>
       <SectionContainerText>
          <p>Complete order</p>
          <p>Terms and conditions and cancellation policy</p>
          <p>Please note our cancellation policy</p>
        </SectionContainerText> 

        <SectionContainerBilling>
          <BillingAddress />
          </SectionContainerBilling>

        <SectionContainerShipping>
          <ShippingAddress />
        </SectionContainerShipping>

        <SectionContainerCart>
          <CheckoutCart />
        </SectionContainerCart>
      </StyledCheckout>

      <Footer />
    </>
  );
};

export default CheckOutPage;