import styled from "styled-components";
import ProductSectionTop from "../individual/ProductSectionTop";

const StyledProduductDetailContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
`;

const StyledProductName = styled.p`
color: #2B3136;
font-family: Inter;
font-size: 2.25rem;
font-style: normal;
font-weight: 600;
line-height: 2.6875rem; 
`
function ProductDetailContent() {
	return <StyledProduductDetailContent>
        <StyledProductName>ProductName</StyledProductName>
        <ProductSectionTop/>
    </StyledProduductDetailContent>;
}

export default ProductDetailContent;
