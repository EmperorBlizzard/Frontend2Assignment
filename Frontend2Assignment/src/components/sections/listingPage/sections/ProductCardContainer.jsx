import ProductCard from "./ProductCard";
import styled from "styled-components";
import { createContext, useContext, useEffect, useState, useRef } from "react";
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

	const [filter, setFilter] = useState("");
	// const [filter, setFilter] = useState("products?filters[category][title][$eq]=Elbike&populate=*")

	const test = useContext(BikeContext);
	const testRef = useRef(test);

	useEffect(() => {
		testRef.current = test;
	}, [test]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				switch (testRef.current) {
					case "MTB":
						setFilter("products?filters[category][title][$eqi]=MTB&populate=*");
						break;
					case "Roadbike":
						setFilter(
							"products?filters[category][title][$eqi]=Roadbike&populate=*"
						);
						break;
					case "Elbike":
						setFilter(
							"products?filters[category][title][$eqi]=ELbike&populate=*"
						);
						break;
					default:
						setFilter("products?&populate=*");
						break;
				}
				console.log(filter);
				const result = await GetApi(filter);
				setProducts(result.data.data);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};
		fetchData();
	}, [filter]);

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
