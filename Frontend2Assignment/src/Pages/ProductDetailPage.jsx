import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer"

import ProductDetailContent from "../components/sections/detailPage/Sections/ProductDetailContent";
import styled from "styled-components";

const StyledPDP = styled.div`display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2.0625rem;`

function ProductDetailPage() {
	return (
		<StyledPDP>
			<Header />
			<ProductDetailContent/>
			<Footer />
		</StyledPDP>
	);
}

export default ProductDetailPage;
