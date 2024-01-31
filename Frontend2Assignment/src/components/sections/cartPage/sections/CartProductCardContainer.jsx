import CartProductDescription from "../individuals/CartProductDescription";
import QuantitySelector from "../individuals/QuantitySelector";
import styled from "styled-components";

const CartProductCardContainerDiv = styled.div`
    display: flex;
`

function CartProductCardContainer() {
    return (
        <CartProductCardContainerDiv>
            <CartProductDescription />
            <QuantitySelector />
        </CartProductCardContainerDiv>
    )
}

export default CartProductCardContainer;