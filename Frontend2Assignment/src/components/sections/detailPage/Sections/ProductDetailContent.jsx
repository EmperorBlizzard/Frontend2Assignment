import styled from "styled-components";
import ProductSectionTop from "../individual/ProductSectionTop";
import { useParams } from "react-router-dom";
import Product from "../../../../Products/Products.json";

const StyledProduductDetailContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
`;

const StyledProductName = styled.p`
	color: #2b3136;
	font-family: Inter;
	font-size: 2.25rem;
	font-style: normal;
	font-weight: 600;
	line-height: 2.6875rem;
`;
function ProductDetailContent() {
	const { id } = useParams();

	return (
		<StyledProduductDetailContent>
			<StyledProductName>{Product.products[id - 1].name}</StyledProductName>
			<ProductSectionTop />
		</StyledProduductDetailContent>
	);
}

export default ProductDetailContent;
