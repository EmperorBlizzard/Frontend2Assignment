import ProductCard from "./ProductCard";
import styled from "styled-components";
import Products from "../../../../Products/Products.json";
import { createContext, useEffect, useState } from "react";
import GetApi from "../../../../Products/api";

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

const ProductCardContainer = () => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await GetApi();
				setProducts(result.data.data);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};
		fetchData();
	}, []);

	const Kolla = () => {
		if (products) {
			return products.map((product) => (
				<ProductContext.Provider key={product.id} value={product}>
					<ProductCard />
				</ProductContext.Provider>
			));
		}
	};

	return (
		<StyledProductCardContainer>
			<Kolla />
		</StyledProductCardContainer>
	);
};

export default ProductCardContainer;
