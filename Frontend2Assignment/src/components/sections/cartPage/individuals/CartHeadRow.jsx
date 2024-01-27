import styled from "styled-components";

const Styleheadrow = styled.div`
	display: flex;
	padding-bottom: 0.625rem;
	align-items: flex-start;
	align-self: stretch;
	border-bottom: 1px solid var(--Border-Default, #798490);
`;
const StyledProduct = styled.div`
	display: flex;
	width: 9.375rem;
	align-items: flex-start;

	color: var(--Typestyle-Headlines, #2b3136);
	font-feature-settings: "clig" off, "liga" off;

	/* Headlines/H5 */
	font-family: Inter;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: 1.3125rem; /* 131.25% */
`;
const StyledQuantity = styled.div`
	display: flex;
	width: 9.375rem;
	align-items: flex-start;

	color: var(--Typestyle-Headlines, #2b3136);
	font-feature-settings: "clig" off, "liga" off;

	display: flex;
	width: 9.375rem;
	align-items: flex-start;

	/* Headlines/H5 */
	font-family: Inter;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: 1.3125rem; /* 131.25% */
`;

const StyledSubtotal = styled.div`
	display: flex;
	width: 9.375rem;
	align-items: flex-start;

	color: var(--Typestyle-Headlines, #2b3136);
	text-align: right;
	font-feature-settings: "clig" off, "liga" off;

	/* Headlines/H5 */
	font-family: Inter;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: 1.3125rem; /* 131.25% */
`;

const CartHeadRow = () => {
	return (
		<Styleheadrow>
			<StyledProduct>Product</StyledProduct>
			<StyledQuantity>Quantity</StyledQuantity>
			<StyledSubtotal>Subtotal</StyledSubtotal>
		</Styleheadrow>
	);
};
export default CartHeadRow;