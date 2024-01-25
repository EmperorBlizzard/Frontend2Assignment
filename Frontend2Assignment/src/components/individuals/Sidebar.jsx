import React from 'react'
import styles from '../../styling/HeaderStyle.module.css'
import MenuLinks from './MenuLinks'
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebarMenu}>
      <div className={styles.sidebar} id='sidebarId'>
        <a className={`${styles.closeButton} ${styles.navLink}`} onClick={() => {
            document.getElementById("sidebarId").style.width="0"
        }}>&times;</a>

        <MenuLinks className={`${styles.navLink}`} name="StartPage" link="/" />
        <MenuLinks className={styles.navLink} name="ListingPage" link="/listingpage" />

        <Outlet />
      </div>
      <div className={styles.menu}>
        <a className={styles.openButton} onClick={() => {
          document.getElementById("sidebarId").style.width="250px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 13.0093C2.44772 13.0093 2 12.5616 2 12.0093C2 11.457 2.44772 11.0093 3 11.0093H21C21.5523 11.0093 22 11.457 22 12.0093C22 12.5616 21.5523 13.0093 21 13.0093H3ZM3 6.00928C2.44772 6.00928 2 5.56156 2 5.00928C2 4.45699 2.44772 4.00928 3 4.00928H21C21.5523 4.00928 22 4.45699 22 5.00928C22 5.56156 21.5523 6.00928 21 6.00928H3ZM3 20.0093C2.44772 20.0093 2 19.5616 2 19.0093C2 18.457 2.44772 18.0093 3 18.0093H21C21.5523 18.0093 22 18.457 22 19.0093C22 19.5616 21.5523 20.0093 21 20.0093H3Z" fill="#798490"/>
          </svg>
        </a>

        <div className={styles.menuIcons}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" width="24" height="24"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.014 12.2998C21.8364 10.4774 21.8364 7.52259 20.014 5.70015C18.1915 3.8777 15.2368 3.8777 13.4143 5.70015L12.0001 7.11436L10.5859 5.70015C8.76344 3.8777 5.80867 3.8777 3.98622 5.70015C2.16377 7.52259 2.16377 10.4774 3.98622 12.2998L11.5051 19.8187C11.7785 20.0921 12.2217 20.0921 12.4951 19.8187L20.014 12.2998ZM21.4282 13.714L13.9093 21.2329C12.8549 22.2873 11.1453 22.2873 10.0909 21.2329L2.57201 13.714C-0.0314891 11.1105 -0.0314891 6.88943 2.57201 4.28593C5.1755 1.68244 9.3966 1.68244 12.0001 4.28593C14.6036 1.68244 18.8247 1.68244 21.4282 4.28593C24.0317 6.88943 24.0317 11.1105 21.4282 13.714Z" fill="#798490"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3ZM12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1ZM4 22.099C4 22.6513 3.55228 23.099 3 23.099C2.44772 23.099 2 22.6513 2 22.099V20C2 17.2386 4.23858 15 7 15H17.0007C19.7621 15 22.0007 17.2386 22.0007 20V22.099C22.0007 22.6513 21.553 23.099 21.0007 23.099C20.4484 23.099 20.0007 22.6513 20.0007 22.099V20C20.0007 18.3431 18.6576 17 17.0007 17H7C5.34315 17 4 18.3431 4 20V22.099Z" fill="#798490"/>
          </svg>
          <MenuLinks name={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.89204 3.00002C6.44433 3.00002 6.89204 3.44774 6.89204 4.00002C6.89204 4.55231 6.44433 5.00002 5.89204 5.00002H3.78955C3.25769 5.00002 2.81888 5.41634 2.79093 5.94746L2.00146 20.9475C1.97243 21.499 2.39599 21.9696 3.00008 22H20.8103C21.3626 22 21.8103 21.5523 21.8089 20.9475L21.0195 5.94744C20.9915 5.41632 20.5527 5 20.0208 5H17.892C17.3398 5 16.892 4.55228 16.892 4C16.892 3.44772 17.3398 3 17.892 3H20.0208C21.6164 3 22.9328 4.24895 23.0167 5.84232L23.8062 20.8423C23.8096 20.9211 23.8096 20.9211 23.8103 21C23.8103 22.6569 22.4672 24 20.8103 24H3.00008C2.9212 23.9993 2.9212 23.9993 2.8424 23.9959C1.18783 23.9088 -0.0828608 22.4969 0.00422151 20.8423L0.793695 5.84235C0.877557 4.24897 2.19397 3.00002 3.78955 3.00002H5.89204ZM9.89204 5C9.89204 5.55228 9.44433 6 8.89204 6C8.33976 6 7.89204 5.55228 7.89204 5V3C7.89204 1.34315 9.23519 0 10.892 0H12.892C14.5489 0 15.892 1.34315 15.892 3V5C15.892 5.55228 15.4443 6 14.892 6C14.3398 6 13.892 5.55228 13.892 5V3C13.892 2.44772 13.4443 2 12.892 2H10.892C10.3398 2 9.89204 2.44772 9.89204 3V5Z" fill="#798490"/>
          </svg>} link="/cartpage"/>
        </div>
    </div>
  </div>
    
    
  )
}

export default Sidebar