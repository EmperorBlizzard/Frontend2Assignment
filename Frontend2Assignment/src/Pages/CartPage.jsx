import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import styled from "styled-components";

import ContentContainer from "../components/sections/cartPage/sections/ContentContainer";

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
        <Styledcartpage>
            <Header />
            <h1> cart</h1>
            <ContentContainer />
            <Footer />
        </Styledcartpage>
    );
}

export default Cartpage;

