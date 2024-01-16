import ProductCard from "./ProductCard";
import styled from "styled-components";

const StyledProductCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-Start;
	flex-wrap: wrap;
	gap: 32px;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

function ProductCardContainer() {
	return (
		<StyledProductCardContainer>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</StyledProductCardContainer>
	);
}

export default ProductCardContainer;
