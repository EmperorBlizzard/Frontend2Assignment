import styled from "styled-components";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../sections/ProductCardContainer";

const PriceBuyButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
	align-self: stretch;
`;

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
`;

const StyledP = styled.h2`
	fontSize: "18px",
	fontWeight: "700",
	lineHeight: "22px",
	margin: 0
`;

function handleClick() {
	console.log(`Köp köp köp`);
}

function handleInfoClick(prod) {
	console.log(`Produkt id: ${prod.id}`);
	<a href="/productdetailpage"></a>
}

const PriceBuyButton = () => {
	const prod = useContext(ProductContext);
	return (
		<PriceBuyButtonContainer>
			<StyledP>Pris: {prod.price}</StyledP>
			<Button onClick={handleClick}>Add to shopping cart</Button>
			<Button onClick={() => {
				handleInfoClick(prod)
			}}>Info</Button>
		</PriceBuyButtonContainer>
	);
};

PriceBuyButton.propTypes = {
	price: PropTypes.string,
};

export default PriceBuyButton;
