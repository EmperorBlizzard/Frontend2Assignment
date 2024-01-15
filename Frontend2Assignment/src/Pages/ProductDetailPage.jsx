import ProductDetailContent from "../components/sections/ProductDetailContent";
import Breadcrumb from "../components/individuals/Breadcrumb";
import styled from "styled-components";

const StyledPDP = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2.0625rem;`

function ProductDetailPage() {
	return (
		<StyledPDP>
		<Breadcrumb/>
		<ProductDetailContent/>
		</StyledPDP>
	);
}

export default ProductDetailPage;
