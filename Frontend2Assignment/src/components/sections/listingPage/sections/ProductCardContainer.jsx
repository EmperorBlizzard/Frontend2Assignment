import ProductCard from "./ProductCard";
import styled from "styled-components";
import { createContext, useEffect, useState } from "react";
import GetApi from "../../../../Products/api";
import PropTypes from "prop-types"

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

const ProductCardContainer = ({filter}) => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await GetApi(filter);
				setProducts(result.data.data);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};
		if (filter !== "") {
			fetchData();
		}
	}, [filter]);

	const Kolla = () => {
		if (products) {
			console.log(products)
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

ProductCardContainer.propTypes = {
	filter: PropTypes.string,
};

export default ProductCardContainer;
