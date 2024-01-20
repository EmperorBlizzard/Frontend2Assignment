import styled from "styled-components";
import PropTypes from "prop-types";

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
`;

const StyledP = styled.p`
	fontSize: "18px",
	fontWeight: "700",
	lineHeight: "22px",
	margin: 0
`;

function handleClick() {
	console.log("Köp köp");
}

function handleInfoClick() {
	console.log("Skicka till infoSidan");
}

const PriceBuyButton = ({ price }) => {
	return (
		<PriceBuyButtonContainer>
			<StyledP>{price}</StyledP>
			<Button onClick={handleClick}>Add to shopping cart</Button>
			<Button onClick={handleInfoClick}>Info</Button>
		</PriceBuyButtonContainer>
	);
};

PriceBuyButton.propTypes = {
	price: PropTypes.string
}

export default PriceBuyButton;
