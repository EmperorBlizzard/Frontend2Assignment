import ProductCard from "./ProductCard";
import styled from "styled-components";
import Products from "../../Products/Products.json";

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
	const Test = () => {
		return Products.products.map((product) => (
			<div key={product.id}>
				<ProductCard
					name={product.name}
					description={product.description}
					price={product.price}
					pRange={product.priceRange}
					image={product.image}
				/>
			</div>
		));
	};
	return (
		<StyledProductCardContainer>
			<Test />
		</StyledProductCardContainer>
	);
}

export default ProductCardContainer;
