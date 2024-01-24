import ProductCard from "./ProductCard";
import styled from "styled-components";
import Products from "../../../../Products/Products.json";
import { createContext } from "react";

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

export const ProductContext = createContext(null);

function ProductCardContainer() {
	const Kolla = () => {
		return Products.products.map((product) => (
			<ProductContext.Provider key={product.id} value={product}>
				<ProductCard />
			</ProductContext.Provider>
		));
	};

	return (
		<StyledProductCardContainer>
			<Kolla />
		</StyledProductCardContainer>
	);
}

export default ProductCardContainer;
