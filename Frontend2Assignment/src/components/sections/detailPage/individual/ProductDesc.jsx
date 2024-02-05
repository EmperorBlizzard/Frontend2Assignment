import {useContext} from "react"
import styled from "styled-components";
import { DetailContext } from "../Sections/ProductDetailContent";

const StyledDescription = styled.div`
	display: flex;
	flex-direction: column;
`

const ProductDesc = () => {
	const {prod} = useContext(DetailContext)
	return (
		<StyledDescription>
			<h1>Produkt info</h1>
			<p>{prod.attributes.longDescription}</p>
		</StyledDescription>
	);
};

export default ProductDesc;
