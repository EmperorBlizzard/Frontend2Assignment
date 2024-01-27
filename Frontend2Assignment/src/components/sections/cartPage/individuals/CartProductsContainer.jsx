import CartHeadRow from "./CartHeadRow";

import styled from "styled-components";

const StyledCartProductContainer = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.625rem;
	flex: 1 0 0;

	width: 100%;
`;
const Styledplaceholder1 = styled.div`
width: 4.0625rem;
height: 4.0625rem;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;

`;

/*Use grid */
const productrow1 = () => {
	return (
		<Styledplaceholder1>
		<input placeholder="" />
		</Styledplaceholder1>

	 );
};
const StyledCartProductDescription = styled.div`
display: flex;
padding-top: 0.5rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
flex: 1 0 0;

`;

const CartProductdescription = () => {
	return (  
		<StyledCartProductDescription>
		    <h3>Name</h3>
            <p>Artikelnummer</p>
            <p>category</p>
            <p>sex</p>
		</StyledCartProductDescription>

	);
};



const CartProductsContainer = () => {
	return (
		<StyledCartProductContainer>
			<CartHeadRow />
			<Styledplaceholder1 />
			<CartProductdescription />
			{/* <Product /> */}

			{/*Remove product button */}
		</StyledCartProductContainer>
	);
};
export default CartProductsContainer;
