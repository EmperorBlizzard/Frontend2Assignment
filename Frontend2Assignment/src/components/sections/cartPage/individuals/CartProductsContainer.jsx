import CartHeadRow from "./CartHeadRow";
import styled from "styled-components";

const StyledCartProductContainer = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.625rem;
	flex: 1 0 0;

	width: 100%;
`;
/*Use grid */

const CartProductsContainer = () => {
	return (
		<StyledCartProductContainer>
			<CartHeadRow />
			{/* <Product /> */}

			{/*Remove product button */}
		</StyledCartProductContainer>
	);
};
export default CartProductsContainer;
