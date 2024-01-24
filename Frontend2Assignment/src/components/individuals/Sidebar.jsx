import React from 'react'
import styles from '../../styling/HeaderStyle.module.css'
import MenuLinks from './MenuLinks'
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div>

    <div className={styles.sidebar}>
      <button className='closeButton' onClick={() => {
          document.querySelector(".sidebar").style.width = "0"
      }}>&times;</button>

      <MenuLinks className={styles.navLink} name="StartPage" link="/" />
      <MenuLinks className="NavLink" name="ProductDetailPage" link="/productdetailpage" />
      <MenuLinks className="NavLink" name="ListingPage" link="/listingpage" />
      <MenuLinks className="NavLink" name="CheckoutPage" link="/checkoutpage"/>
      <MenuLinks className="NavLink" name="BuildingPageToBeDeleted" link="/buildingpagetobedeleted" />  

      <Outlet />
    </div>

      <button onClick={()=>{
        document.querySelector(".sidebar").style.width = "250px";
      }}>☰</button>
    </div>
    
    
  )
}

export default Sidebar