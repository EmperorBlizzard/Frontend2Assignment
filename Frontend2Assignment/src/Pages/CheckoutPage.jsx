import { useContext } from "react";
import { CartContext } from "../App.jsx";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import BillingAddress from "../components/sections/checkoutPage/sections/BillingAddress.jsx";
import ShippingAddress from "../components/sections/checkoutPage/sections/ShippingAddress.jsx";
import PaymentMethod from "../components/sections/checkoutPage/sections/PaymentMethod.jsx";
import PurchaseButton from "../components/sections/checkoutPage/individual/PurchaseButton.jsx";
import styled from "styled-components";
import ProductCardCheckout from "../components/sections/checkoutPage/sections/ProductCardCheckout.jsx";
import QuantityButton from "../components/sections/checkoutPage/individual/QuantityButton.jsx";

const StyledCheckout = styled.div`
  max-width: 55.9375rem;
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

  color: #2b3136;
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  box-sizing: border-box;
  width: 64rem;
  padding: 1rem;
  margin: 1rem;
`;

const StyledMapping = styled.div`
  border: 1px solid #2b3136;
  border-radius: 9px;
  margin: 1rem;

  p{
    font-family: "Inter", sans-serif;
    font-weight: 800;
    margin: 1.5rem;
  }
`;

const StyledPayment = styled.div`
  border: 1px solid #2b3136;
  border-radius: 9px;
  margin: 1rem;
`;

const CheckOutPage = () => {
  const Name = useContext(CartContext);
  const NameList = Name.itemsInCart;
  
  const {totalPrice} = useContext(CartContext); 


  const Mapping = () => {
    return NameList.map((namn) => (
      <div key={namn.id}>
        <ProductCardCheckout card={namn} totalPrice={totalPrice} />
        <QuantityButton productId={namn.id} />
        
      </div>
    ));
  
  };

  return (
    <>
      <Header />

      <StyledCheckout>
        <SectionContainerText>
          <p>Complete order</p>
        </SectionContainerText>

        <BillingAddress />

        <ShippingAddress />

        <StyledMapping>
          <Mapping />
          <p>Totalpris på order: {totalPrice}</p>
          <PurchaseButton />
          <QuantityButton />
        </StyledMapping>
        
        <StyledPayment>
          <PaymentMethod />
        </StyledPayment>
      </StyledCheckout>

      <Footer />
    </>
  );
};

export default CheckOutPage;
