import styled from "styled-components";
import ProductSectionTop from "../individual/ProductSectionTop";

const StyledProductSection = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.5rem;
`;

function ProductSection() {
	return (
		<StyledProductSection>
			<ProductSectionTop />
		</StyledProductSection>
	);
}

export default ProductSection;
