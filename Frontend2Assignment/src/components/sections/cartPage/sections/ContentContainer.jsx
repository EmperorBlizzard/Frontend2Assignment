import CartContent from "./CartContent";
import SummaryContainer from "./SummaryContainer";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../../../App";

const CartContentDiv = styled.div`
display:flex;

`



function ContentContainer() {
    const cart = useContext(CartContext)
    const isEmpty = cart.itemsInCart.length;

    return (
        <div>
            {
                isEmpty ?
                    <CartContentDiv>

                        <CartContent />
                        <SummaryContainer />
                    </CartContentDiv>

                    :

                    <p>Kundvagnen är tom</p>
            }
        </div>

    )
}

export default ContentContainer;