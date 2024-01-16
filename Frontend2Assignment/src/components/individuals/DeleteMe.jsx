import DeleteMeNav from "./DeleteMeNav";
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
        <DeleteMeNav name="StartPage" link="/" />
        <DeleteMeNav name="ProductDetailPage" link="/productdetailpage" />
        <DeleteMeNav name="ListingPage" link="/listingpage" />
        <DeleteMeNav name="CheckoutPage" link="/checkoutpage"/>
        <DeleteMeNav name="CartPage" link="/cartpage" />
        <DeleteMeNav name="BuildingPageToBeDeleted" link="/buildingpagetobedeleted" />
      </NavigationBar>

      <Outlet />
    </>
  );
  }
export default DeleteMe;
