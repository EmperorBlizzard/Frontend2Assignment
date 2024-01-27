import MenuLinks from "./MenuLinks";
import { Outlet } from "react-router-dom";
import styles from '../../styling/HeaderStyle.module.css'


function Menu() {
  
  return (
    <nav className={styles.navigationBar}>
      <MenuLinks name="StartPage" link="/" />
      <MenuLinks name="ListingPage" link="/listingpage" />
      <MenuLinks name="CheckoutPage" link="/checkoutpage"/>
      <MenuLinks name="BuildingPageToBeDeleted" link="/buildingpagetobedeleted" />

      <Outlet />
    </nav>
  );
}
export default Menu;
