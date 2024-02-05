import styled from "styled-components";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../sections/ProductCardContainer";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../App";

const PriceBuyButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
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
	cursor: pointer;
`;

const CustomerInfo = styled.div`
	display: flex;
	align-items: flex-start;
	align-self: stretch;
	justify-content: space-between;
`

const PriceBuyButton = () => {
	const prod = useContext(ProductContext);
	const { setAddCart } = useContext(CartContext);
	function handleClick() {
		setAddCart(prod);
	}
	return (
		<>
			<CustomerInfo>
				<>
			<h3>Pris: {prod.attributes.price}</h3>
			<h3>Lagersaldo: {prod.attributes.stock}</h3>
				</>
			</CustomerInfo>
			<PriceBuyButtonContainer>
				<>
					<Button onClick={handleClick}>Lägg i varukorgen</Button>
					<Link to={`/ProductDetailPage/${prod.id}`}>
						<Button>Information</Button>
					</Link>
				</>
			</PriceBuyButtonContainer>
		</>
	);
};

PriceBuyButton.propTypes = {
	onButtonClick: PropTypes.func,
};

export default PriceBuyButton;
