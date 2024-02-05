import { useContext } from "react";
import { CartContext } from "../App";
import CartProductDescription from "../individuals/CartProductDescription";
import QuantitySelector from "../individuals/QuantitySelector";
import styled from "styled-components";



const CartProductCardContainerDiv = styled.div`
    display: flex;
`;

function CartProductCardContainer() {

    const card = useContext(CartContext);
    const NameList = card.itemsInCart;

    const Test = () => {
        return (
            <>
            {NameList.map((card) =>(
                <CartProductDescription key={card.id} card={card} />
            ))}
            
            </>
        );
    };
    return (
        <CartProductCardContainerDiv>
         <Test/>
            
            {/*<QuantitySelector />*/}
        </CartProductCardContainerDiv>
    )
}

export default CartProductCardContainer;