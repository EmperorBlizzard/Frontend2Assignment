import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../../App";


const StyledDescription = styled.div`
display: flex;
border: solid 1px;
padding-top: 0.5rem;
align-items: center;
gap: 1rem;
flex: 1 0 0;

`;

const QuantityDisplay = styled.div`
 display: flex;
width: 2.75rem;

justify-content: center;
align-items: center;
gap: 0.625rem;
flex-shrink: 0;
`;

const PlusMinusButton = styled.button`
display: flex;
width: 2.75rem;
height: 2.5625rem;

justify-content: center;
align-items: center;
gap: 0.625rem;
flex-shrink: 0;
`;

const DeleteButton = styled.button`
display: flex;
  width: 2.75rem;
  height: 2.5625rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  cursor: pointer;
  background: none;
  border: none;
`;


const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M6 13.5H18C18.5523 13.5 19 13.0523 19 12.5C19 11.9477 18.5523 11.5 18 11.5H6C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5Z" fill="#798490" />
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M11 11.5V6.5C11 5.94772 11.4477 5.5 12 5.5C12.5523 5.5 13 5.94772 13 6.5V11.5H18C18.5523 11.5 19 11.9477 19 12.5C19 13.0523 18.5523 13.5 18 13.5H13V18.5C13 19.0523 12.5523 19.5 12 19.5C11.4477 19.5 11 19.0523 11 18.5V13.5H6C5.44772 13.5 5 13.0523 5 12.5C5 11.9477 5.44772 11.5 6 11.5H11Z" fill="#798490" />
    </svg>
);

const DeleteIcon = () => (

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 10.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L13.4142 12L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L12 13.4142L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L10.5858 12L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L12 10.5858Z" fill="#4A545B" />
    </svg>);

const SummaryContainer = styled.div`
  
  padding: 0.5rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  margin-left: 7rem;
`;

const SummaryText = styled.p`
  font-size: 1.25rem;
  margin: 0;
`;

const CartProductImage = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    width: 7rem;
    align-items: center;

    `;

const CartProductInfo = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        width: 8rem;
        

    `;
const Quantitydiv = styled.div`
    display: flex;
    align-items: center;
    margin: 0 5rem;
    border: 0.1rem solid black;
    
    
   `;
const CartProductDescriptionDiv = styled.div`
    display:flex;
    align-items:center;
    gap:1em;
   `;


const CartProductDescription = ({ card }) => {

    const cart = useContext(CartContext);

    const imgLink = import.meta.env.VITE_STRAPI_URL + card.image
    const img = imgLink.replace("/api/", "")


    const productPrice = parseInt(card.price)
    const cartQuantity = parseInt(card.amountOfProducts)

    const [quantity, setQuantity] = useState(1);
    const [pricePerItem, setPricePerItem] = useState(null);


    const handleIncrease = () => {
        if (card.amountOfProducts > 1) {
            cart.decreaseQuantity(card.id)
        }
        else {
            cart.deleteProductFromCart(card.id)
        }

    };

    const handleDecrease = () => {
        cart.increaseQuantity(card.id)
    };

    const handleDelete = () => {
        cart.deleteProductFromCart(card.id)
    };

    useEffect(() => {
        handleSetPriceAndSetQuantity();

    }, [productPrice, productPrice])

    const handleSetPriceAndSetQuantity = () => {

        setPricePerItem(productPrice);
        setQuantity(cartQuantity);
    };


    const totalPriceFunc = () => {
        return quantity * pricePerItem
    }

    return (
        <CartProductDescriptionDiv>
            <StyledDescription>

                <CartProductImage src={img} alt="" />
                <CartProductInfo>
                    <p> Artikelnummer: {card.id} </p>
                    <p> produktnamn: {card.productName} </p>
                    <p> pris: {card.price} </p>
                </CartProductInfo>

            </StyledDescription>

            <Quantitydiv>
                <PlusMinusButton onClick={handleIncrease}>{MinusIcon()}</PlusMinusButton>
                <QuantityDisplay>{quantity}</QuantityDisplay>
                <PlusMinusButton onClick={handleDecrease}>{PlusIcon()}</PlusMinusButton>
            </Quantitydiv>
            <SummaryContainer>
                <SummaryText>Totalt: {totalPriceFunc()} kr</SummaryText>
            </SummaryContainer>
            <DeleteButton onClick={handleDelete}>{DeleteIcon()}</DeleteButton>

        </CartProductDescriptionDiv>
    );
}

export default CartProductDescription;;



