import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import styled from "styled-components";

import ContentContainer from "../components/sections/cartPage/sections/ContentContainer";

import ShoppingCartContainer from "../components/sections/cartPage/individuals/Shoppingcartcontainer";
import Cartheadrow from "../components/sections/cartPage/individuals/CartHeadRow";
import CartItemImageRow1 from "../components/sections/cartPage/individuals/CartItemImageRow1";
import CartProductDescription from "../components/sections/cartPage/individuals/CartProductDescription";
import QuantitySelector from "../components/sections/cartPage/individuals/QuantitySelector";
import CartSubtotal from "../components/sections/cartPage/individuals/CartSubtotal";
import InputPlusLink from "../components/sections/cartPage/individuals/Inputpluslink";

const Styledcartpage = styled.div`
 
display: flex;
width: 85rem;
padding: 1.25rem 0rem;
flex-direction: column;
align-items: flex-start;
gap: 0.625rem;

`;

function Cartpage() {
    return (
        <>
            <Header />
            <h2>CART</h2>
            <ContentContainer />
            <Footer />
        </>
    );
}

export default Cartpage;

