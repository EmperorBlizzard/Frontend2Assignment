import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import styled from "styled-components";

import ContentContainer from "../components/sections/cartPage/sections/ContentContainer";

const Styledcartpage = styled.div`
 
width:100%


`;

function Cartpage() {
    return (
        <Styledcartpage>
            <Header />
            <h1>Varukorg</h1>
            <ContentContainer />
            <Footer />
        </Styledcartpage>
    );
}

export default Cartpage;

