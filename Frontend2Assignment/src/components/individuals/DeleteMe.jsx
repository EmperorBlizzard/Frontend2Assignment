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
<<<<<<< HEAD
      <NavigationBar>
        <DeleteMeNav name="StartPage" link="/" />
        <DeleteMeNav name="ProductDetailPage" link="/productdetailpage" />
        <DeleteMeNav name="ListingPage" link="/listingpage" />
        <DeleteMeNav name="CheckoutPage" link="/checkoutpage"/>
        <DeleteMeNav name="CartPage" link="/cartpage" />
        <DeleteMeNav name="BuildingPageToBeDeleted" link="/buildingpagetobedeleted" />
      </NavigationBar>

      <Outlet />
=======
      <li>
        <a href="./BuildingPageToBeDeleted">BuildPage</a>
      </li>
      <li>
        <a href="./Cartpage">CartPage</a>
      </li>
      <li>
        <a href="./Checkoutpage">Check outpage</a>
      </li>
      <li>
        <a href="./ListingPage">ListingPage</a>
      </li>
      <li>
        <a href="./ProductDetailPage">Product Detail Page</a>
      </li>
      <li>
        <a href="./StartPage">StartPage</a>
      </li>
>>>>>>> 18931122f43a1142552aae1555c7815282ac93c6
    </>
  );
  }
export default DeleteMe;
