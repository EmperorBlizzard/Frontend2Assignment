import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductCardRow = styled.div({
    display: 'flex',
	alignItems: 'flex-Start',
    gap: '32px'
});

function ProductRow() {
	return (
		<ProductCardRow>
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</ProductCardRow>
	);
}

export default ProductRow;
