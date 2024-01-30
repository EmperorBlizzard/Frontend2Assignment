import { DetailContext } from "./ProductDetailContent";
import { useContext } from "react";
import QuantitySelector from "../individual/QuantitySelector";
import styled from "styled-components";


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
	return (
		<div>
			<h1>Price {prod.attributes.price}</h1>
			<h3>Antal i lager: {prod.attributes.stock}</h3>
			<QuantitySelector/>
			<Button>Köp för fan</Button>
		</div>
	);
};

export default PriceArea;
