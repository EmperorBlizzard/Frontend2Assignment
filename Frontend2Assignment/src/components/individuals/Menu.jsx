import MenuLinks from "./MenuLinks";
import { Outlet } from "react-router-dom";
import styles from '../../styling/HeaderStyle.module.css'


function Menu() {
  
  return (
    <nav className={styles.navigationBar}>
      <MenuLinks name="StartSida" link="/" />
      <MenuLinks name="Produkter" link="/listingpage" />
      <MenuLinks name="CheckoutPage" link="/checkoutpage"/>
      <MenuLinks name="BuildingPageToBeDeleted" link="/buildingpagetobedeleted" />
      <MenuLinks name="EmailTestPage" link="/emailtestpage" />

      <Outlet />
    </nav>
  );
}
export default Menu;
