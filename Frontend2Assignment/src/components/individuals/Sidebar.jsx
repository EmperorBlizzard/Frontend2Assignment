import React from 'react'
import styled from 'styled-components'
import MenuLinks from './MenuLinks'
import { Outlet } from "react-router-dom";

const SidebarStyleDiv = styled.div`
    height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`
const SidebarCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
`

const NavigationBar = styled.ul`
  display:flex;
  flex-direction:column;
  gap: 1em;
`;

const MenuLinksDiv = styled.li`
    border:none;
    display:inline-block;
    padding:8px 16px;
    vertical-align:middle;
    overflow:hidden;
    text-decoration:none;
    color:inherit;
    background-color:inherit;
    text-align:center;
    cursor:pointer;
    white-space:nowrap;
`

function Sidebar() {
  return (
    <SidebarStyleDiv className='sidebar'>
        <SidebarCloseButton onClick={() => {
            document.querySelector(".sidebar").style.width = "0"
        }}>&times;</SidebarCloseButton>

        <NavigationBar>
            <MenuLinksDiv>
                <MenuLinks name="StartPage" link="/" />
            </MenuLinksDiv>

            <MenuLinksDiv>
                <MenuLinks name="ProductDetailPage" link="/productdetailpage" />
            </MenuLinksDiv>

            <MenuLinksDiv>
                <MenuLinks name="ListingPage" link="/listingpage" />
            </MenuLinksDiv>

            <MenuLinksDiv>
                <MenuLinks name="CheckoutPage" link="/checkoutpage"/>
            </MenuLinksDiv>
            
            <MenuLinksDiv>
                <MenuLinks name="BuildingPageToBeDeleted" link="/buildingpagetobedeleted" />
            </MenuLinksDiv>


            
            
            
        </NavigationBar>

      <Outlet />
    </SidebarStyleDiv>
  )
}

export default Sidebar