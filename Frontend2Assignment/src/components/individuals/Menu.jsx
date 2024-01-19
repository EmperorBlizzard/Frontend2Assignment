import MenuLinks from "./MenuLinks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = styled.nav`
  display:flex;
  gap: 1em;
`;

function DeleteMe() {
  
  return (
    <>
      <NavigationBar>
        <MenuLinks name="StartPage" link="/" />
        <MenuLinks name="ProductDetailPage" link="/productdetailpage" />
        <MenuLinks name="ListingPage" link="/listingpage" />
        <MenuLinks name="CheckoutPage" link="/checkoutpage"/>
        <MenuLinks name="CartPage" link="/cartpage" />
        <MenuLinks name="BuildingPageToBeDeleted" link="/buildingpagetobedeleted" />
      </NavigationBar>

      <Outlet />
    </>
  );
}
export default DeleteMe;
