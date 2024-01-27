import styled from "styled-components";

const Styleheadrow = styled.div`
<<<<<<< HEAD
 
display: flex;
padding-bottom: 0.625rem;
align-items: flex-start;
align-self: stretch;
border-bottom: 1px solid var(--Border-Default, #798490);

=======
	display: flex;
	padding-bottom: 0.625rem;
	align-items: flex-start;
	align-self: stretch;
	border-bottom: 1px solid var(--Border-Default, #798490);
>>>>>>> 44f0a4a517992566e691b041db5c24cb05785db1
`;
const StyledProduct = styled.div`
	display: flex;
	width: 9.375rem;
	align-items: flex-start;

	color: var(--Typestyle-Headlines, #2b3136);
	font-feature-settings: "clig" off, "liga" off;

<<<<<<< HEAD
color: var(--Typestyle-Headlines, #2B3136);
font-feature-settings: 'clig' off, 'liga' off;

/* Headlines/H5 */
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 1.3125rem; /* 131.25% */
=======
	/* Headlines/H5 */
	font-family: Inter;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: 1.3125rem; /* 131.25% */
>>>>>>> 44f0a4a517992566e691b041db5c24cb05785db1
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

<<<<<<< HEAD
color: var(--Typestyle-Headlines, #2B3136);
font-feature-settings: 'clig' off, 'liga' off;

display: flex;
width: 9.375rem;
align-items: flex-start;

/* Headlines/H5 */
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 1.3125rem; /* 131.25% */
=======
	/* Headlines/H5 */
	font-family: Inter;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: 1.3125rem; /* 131.25% */
>>>>>>> 44f0a4a517992566e691b041db5c24cb05785db1
`;

const StyledSubtotal = styled.div`
	display: flex;
	width: 9.375rem;
	align-items: flex-start;

	color: var(--Typestyle-Headlines, #2b3136);
	text-align: right;
	font-feature-settings: "clig" off, "liga" off;

<<<<<<< HEAD
/* Headlines/H5 */
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 1.3125rem; /* 131.25% */
`;

const CartHeadRow = () => {

    
    return ( <Styleheadrow>
        
            <StyledProduct>Product</StyledProduct>
            <StyledQuantity>Quantity</StyledQuantity>
            <StyledSubtotal>Subtotal</StyledSubtotal>

            
            
        
    </Styleheadrow> );
}
 
=======
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
>>>>>>> 44f0a4a517992566e691b041db5c24cb05785db1
export default CartHeadRow;