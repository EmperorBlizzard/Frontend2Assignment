import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer"
import CartProductTable from "../components/sections/cartPage/individuals/CartProductTable";
import CartContainer from "../components/sections/cartPage/sections/CartContainer";
import styled from "styled-components";

const Styledcartpage = styled.div`
 
display: flex;
width: 85rem;
padding: 1.25rem 0rem;
flex-direction: column;
align-items: flex-start;
gap: 0.625rem;

`

function Cartpage() {
    return (
        <>
            <Header />
            <Styledcartpage>
                <h1>Shopping cart</h1>
                <CartContainer />
                {/* <CartProductTable /> */}
            </Styledcartpage>
            <Footer />
        </>
    );
}

export default Cartpage;
