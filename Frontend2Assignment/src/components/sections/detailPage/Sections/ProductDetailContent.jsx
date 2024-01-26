import styled from "styled-components";
import ProductSectionPDS from "../individual/ProductSectionTop";
import { useParams, Link } from "react-router-dom";
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
	border-radius: 0.7rem;
`;
function ProductDetailContent() {
	const { id } = useParams();

	
	
	return (
		<StyledProduductDetailContent>
			<StyledProductName>{Product.products[id - 1].name}</StyledProductName>
			<ProductSectionPDS />
			<Link to="/listingPage">
				<Button>HomePage</Button>
			</Link>
		</StyledProduductDetailContent>
	);
}

export default ProductDetailContent;
