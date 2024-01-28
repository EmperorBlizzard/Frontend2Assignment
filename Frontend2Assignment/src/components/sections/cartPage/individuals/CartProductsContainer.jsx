import CartHeadRow from "./CartHeadRow";

import styled from "styled-components";

const StyledCartProductContainer = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.625rem;
	flex: 1 0 0;

`;
const Styledplaceholder1 = styled.div`
width: 4.0625rem;
height: 4.0625rem;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;

`;

/*Use grid */

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
const StyledMinusselector = styled.div`
display: flex;
width: 8.25rem;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
border: 1px solid var(--Border-Default, #798490);
background: var(--Generic-White, #FFF);
`;

const StyledPlusselector = styled.div`
width: 1.5rem;
height: 1.5rem;
flex-shrink: 0;
`;

const Selector = () => {
	return ( 
		<>
		<StyledMinusselector>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13.5H18C18.5523 13.5 19 13.0523 19 12.5C19 11.9477 18.5523 11.5 18 11.5H6C5.44772 11.5 5 11.9477 5 12.5C5 13.0523 5.44772 13.5 6 13.5Z" fill="#798490"/>
</svg>
		</StyledMinusselector>	
		<StyledPlusselector>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 11.5V6.5C11 5.94772 11.4477 5.5 12 5.5C12.5523 5.5 13 5.94772 13 6.5V11.5H18C18.5523 11.5 19 11.9477 19 12.5C19 13.0523 18.5523 13.5 18 13.5H13V18.5C13 19.0523 12.5523 19.5 12 19.5C11.4477 19.5 11 19.0523 11 18.5V13.5H6C5.44772 13.5 5 13.0523 5 12.5C5 11.9477 5.44772 11.5 6 11.5H11Z" fill="#798490"/>
</svg>
		</ StyledPlusselector>
		</>
	 );
};
 




const CartProductsContainer = () => {
	return (
		<StyledCartProductContainer>
			<CartHeadRow />
			<Styledplaceholder1 />
			<CartProductdescription />
			{/* <QuantitySelector /> */}
			{/* <Product /> */}

			{/*Remove product button */}
		</StyledCartProductContainer>
	);
};
export default CartProductsContainer;
