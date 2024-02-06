import { DetailContext } from "./ProductDetailContent";
import { useContext, useState } from "react";
// import QuantitySelector from "../individual/QuantitySelector";
import styled from "styled-components";
import { CartContext } from "../../../../App";
import { NavLink } from "react-router-dom";

const Button = styled.button`
	display: flex;
	height: 3rem;
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

const StyledLink = styled(NavLink)`
	text-decoration: none;
`;

const StyledPriceArea = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledInStock = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	h1 {
		margin: 0;
	}
`;

const PriceArea = () => {
	const { prod } = useContext(DetailContext);
	const { setAddCart } = useContext(CartContext);

	
	
	function handleClick() {
		if (num == 0) {
			""
		} else {
			prod.amountOfProducts = num;
			setAddCart(prod);
			
		}
	}

	const StyledOutOfStock = styled.div`
		display: flex;
		gap: 2rem;
	`


	const OutOfStock = () => {
		return (
			<StyledOutOfStock>
				<h3>
					Vi är hemskt ledsna att produkten är slut på lager men skicka gärna
					ett mail om ni önskar att vi tar in produkten igen
				</h3>
				<StyledLink to="/contactpage">
					<Button>Kontakta oss</Button>
				</StyledLink>
			</StyledOutOfStock>
		);
	};

	const StyledSelect = styled.div`
		display: flex;
		border: 1px solid black;
		border-radius: 0.7rem;
		div {
			display: flex;
			height: 3rem;
			width: 3rem;
			align-items: center;
			font-size: 1.5rem;
			font-weight: bold;
			justify-content: center;
			cursor: pointer;
		}
	`;
	const inc = () => {
		const tempnum = num + 1;
		setNum(tempnum);
	};
	const dec = () => {
		let tempnum = num - 1;
		if (tempnum <= 0) {
			tempnum = 0;
		}
		setNum(tempnum);
	};

	const [num, setNum] = useState(0);
	const Select = () => {
		return (
			<StyledSelect>
				<div onClick={inc}>+</div>
				<div>{num}</div>
				<div onClick={dec}>-</div>
			</StyledSelect>
		);
	};

	const InStock = () => {
		return (
			<StyledInStock>
				<h1>Pris: {prod.attributes.price} :-</h1>
				<Select />
				<StyledLink to="/listingpage">
					<Button onClick={handleClick}>Lägg i kundkorg</Button>
				</StyledLink>
				
			</StyledInStock>
		);
	};

	// const itemIndex = itemsInCart.findIndex((item) => item.id === prod.id);

	return (
		<StyledPriceArea>
			{!prod.attributes.stock ? <OutOfStock /> : <InStock />}
		</StyledPriceArea>
	);
};
export default PriceArea;
