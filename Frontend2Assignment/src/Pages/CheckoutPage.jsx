import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import BillingAddress from "../components/sections/checkoutPage/sections/BillingAddress.jsx"; 
import ShippingAddress from "../components/sections/checkoutPage/sections/ShippingAddress.jsx";
import CheckoutCart from "../components/sections/checkoutPage/sections/CheckoutCart.jsx";
import PaymentMethod from "../components/sections/checkoutPage/sections/PaymentMethod.jsx";
import styled from "styled-components";

const StyledCheckout = styled.div`
  
  max-width: 55.9375rem;
  width: 100%;
  margin: 5rem;
  

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
	@media (max-width: 37.5rem) {
		flex-direction: column;
	}
`;

const SectionContainerText = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  
  margin-bottom: 2rem;
  font-weight: 600;
  line-height: 1.75rem; 
  letter-spacing: -0.03rem; 
  
  color: #2B3136; 
  font-family: 'Inter', sans-serif; 
  font-size: 2rem;
  box-sizing: border-box;
  width: 64rem;
  padding: 1rem;
  margin: 1rem;
   
`; 





const CheckOutPage = () => {
  return (
    <>
      <Header />

      <StyledCheckout>
       <SectionContainerText>
          <p>Complete order</p>
          
        </SectionContainerText> 

       
          <BillingAddress />
          

       
          <ShippingAddress />
       

       
          <CheckoutCart />
       

        <PaymentMethod />

      </StyledCheckout>

      <Footer />
    </>
  );
};

export default CheckOutPage;