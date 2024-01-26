import ProductCard from "./ProductCard";
import styled from "styled-components";
import { createContext, useContext, useEffect, useState } from "react";
import GetApi from "../../../../Products/api";
import { BikeContext } from "../individuals/FilterPanel";

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
	const [filter, setFilter] = useState("products?&populate=*");
	// const [filter, setFilter] = useState("products?filters[category][title][$eq]=Elbike&populate=*")

	const filt = useContext(BikeContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!filt) {
					setFilter(
						`products?filters[category][title][$eq]=${filt}&populate=*`
					);
					console.log(filter)
				}
				const result = await GetApi(filter);
				setProducts(result.data.data);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};
		fetchData();
	}, [filt, filter]);

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
