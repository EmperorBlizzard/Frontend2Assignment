import { useState } from "react";
import styled from "styled-components";

const StyledQuantitySelector = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #007bff;
`;

const StyledQuantityButton = styled.button`
	color: #fff;
	border: none;
	padding: 5px 10px;
	cursor: pointer;
`;

const StyledQuantityDisplay = styled.span`
	font-size: 1.2em;
	font-weight: bold;
	margin: 0 10px;
`;

const QuantitySelector = () => {
	const [quantity, setQuantity] = useState(1);

	const handleIncrease = () => {
		setQuantity(quantity + 1);
	};
	const handleDecrease = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<StyledQuantitySelector>
			<StyledQuantityButton>
				<button onClick={handleDecrease}>-</button>
			</StyledQuantityButton>
			<StyledQuantityDisplay>
				<span>{quantity}</span>
			</StyledQuantityDisplay>
			<StyledQuantityButton>
				<button onClick={handleIncrease}>+</button>
			</StyledQuantityButton>
		</StyledQuantitySelector>
	);
};

export default QuantitySelector;
