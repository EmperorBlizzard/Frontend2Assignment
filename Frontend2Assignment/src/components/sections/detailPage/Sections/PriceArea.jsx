import { DetailContext } from "./ProductDetailContent";
import { useContext } from "react";
// import QuantitySelector from "../individual/QuantitySelector";
import styled from "styled-components";
import { CartContext } from "../../../../App";

const Button = styled.button`
	display: flex;
	height: 44px;
	padding: 0px 14px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	background-color: #0b539b;
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	line-height: 20px;
	border-radius: 0.7rem;
	cursor: pointer;
`;

const PriceArea = () => {
	const prod = useContext(DetailContext);
	const {
		itemsInCart,
		setAddCart,
		increaseQuantity,
		decreaseQuantity,
	} = useContext(CartContext);
	function handleClick() {
		setAddCart(prod);
	}
	const increase = () => {
		increaseQuantity(prod.id);
	};
	const decrease = () => {
		console.log("test")
		decreaseQuantity(prod.id);

	};
	
	const itemIndex = itemsInCart.findIndex((item) => item.id === prod.id);
	if (itemIndex !== -1) {
		// console.log(itemIndex)
		// console.log(itemsInCart[itemIndex].amountOfProducts)
	}
		return (
			<div>
				<h1>Price {prod.attributes.price}</h1>
				<h3>Antal i lager: {prod.attributes.stock}</h3>
				{
					itemIndex !== -1 ? <h3>Antal i varukorg: {itemsInCart[itemIndex].amountOfProducts}</h3> : ""
				}
				<button onClick={increase}>Öka</button>
				<button onClick={decrease}>minska</button>
				<Button onClick={handleClick}>Köp för fan</Button>
			</div>
		);
};
export default PriceArea;
