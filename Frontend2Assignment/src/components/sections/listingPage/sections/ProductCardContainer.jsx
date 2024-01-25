import ProductCard from "./ProductCard";
import styled from "styled-components";
import Products from "../../../../Products/Products.json";
import { createContext, useEffect } from "react";
import { useState } from "react";

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
	const [lista, setLista] = useState(Products.products)

	useEffect(()=> {
		const bikes = lista.filter((bike) => bike.category === "roadbike")
		setLista(bikes)

	}, [])

	const Kolla = () => {
		return lista.map((product) => (
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
