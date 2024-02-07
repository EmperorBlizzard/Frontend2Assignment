
import styled from "styled-components";
import Cartheadrow from "../individuals/CartHeadRow";
import CartProductCardContainer from "./CartProductCardContainer";


const CartContentDiv = styled.div`
    
`

function CartContent() {
    return (
        <div>
            <Cartheadrow />
            <CartProductCardContainer />
            {/* <InputPlusLink /> */}

        </div>
    )
}

export default CartContent;