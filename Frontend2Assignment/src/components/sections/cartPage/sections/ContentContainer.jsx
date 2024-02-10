import CartContent from "./CartContent";
import SummaryContainer from "./SummaryContainer";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../../../App";

const CartContentDiv = styled.div`
display:flex;

`

const Text = styled.div`
font-family: Inter;
font-size: Bold;
font-weight: 600;
    
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

                    <Text>Din kundkorg är tom.</Text>
            }
        </div>

    )
}

export default ContentContainer;