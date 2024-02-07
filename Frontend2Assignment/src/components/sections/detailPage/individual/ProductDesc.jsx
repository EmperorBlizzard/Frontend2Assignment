import {useContext} from "react"
import styled from "styled-components";
import { DetailContext } from "../Sections/ProductDetailContent";

const StyledDescription = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 2rem 0 0;
`

const ProductDesc = () => {
	const {prod} = useContext(DetailContext)
	return (
		<StyledDescription>
			<p>{prod.attributes.longDescription}</p>
		</StyledDescription>
	);
};

export default ProductDesc;
