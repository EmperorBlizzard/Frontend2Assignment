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
	const {setAddCart, increaseQuantity, decreaseQuantity, getTotalPrice} = useContext(CartContext)
	function handleClick() {
		setAddCart(prod)
	}
	const increase = () => {
		increaseQuantity(prod.id)
		console.log(getTotalPrice())
	}
	const decrease = () => {
		decreaseQuantity(prod.id)
		console.log(getTotalPrice())
	}
	return (
		<div>
			<h1>Price {prod.attributes.price}</h1>
			<h3>Antal i lager: {prod.attributes.stock}</h3>
			{/* <QuantitySelector/> */}
			<button onClick={increase}>Öka</button>
			<button onClick={decrease}>minska</button>
			<Button onClick={handleClick}>Köp för fan</Button>
		</div>
	);
};

export default PriceArea;

// const PriceBuyButton = () => {
// 	const prod = useContext(ProductContext);
// 	const { setAddCart } = useContext(CartContext);
// 	function handleClick() {
// 		setAddCart(prod);
// 	}
// 	return (
// 		<>
// 			<h3>Pris: {prod.attributes.price}</h3>
// 			<PriceBuyButtonContainer>
// 				<>
// 					<Button onClick={handleClick}>Add to shopping cart</Button>
// 					<Link to={`/ProductDetailPage/${prod.id}`}>
// 						<Button>Info</Button>
// 					</Link>
// 				</>
// 			</PriceBuyButtonContainer>
// 		</>
// 	);
// };
