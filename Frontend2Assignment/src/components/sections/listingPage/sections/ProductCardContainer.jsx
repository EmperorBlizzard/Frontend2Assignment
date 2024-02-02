import ProductCard from "./ProductCard";
import styled from "styled-components";
import { createContext, useContext, useEffect, useState } from "react";
import GetApi from "../../../../Products/api";
import PropTypes from "prop-types";
import { CartContext } from "../../../../App";

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

const ProductCardContainer = ({ filter }) => {
	const [products, setProducts] = useState(null);
	// const [itemInCart, setItemInCart] = useState([]);
	const {itemsInCart, setItemsInCart} = useContext(CartContext)

	const handleButtonClick = (buttonInfo) => {
		console.log(itemsInCart);
		const itemIndex = itemsInCart.findIndex((item) => item.id === buttonInfo.id);
		if (itemIndex !== -1) {
			const upDatedList = [...itemsInCart];
			upDatedList[itemIndex].amountOfProducts += 1;
			setItemsInCart(upDatedList);
		} else {
			const item = {
				id: buttonInfo.id,
				productName: buttonInfo.attributes.productName,
				price: buttonInfo.attributes.price,
				amountOfProducts: 1,
			};
			const upDatedList = [...itemsInCart, item];
			setItemsInCart(upDatedList);
			// console.log(itemsInCart);
		}
	};

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
			return products.map((product) => (
				<ProductContext.Provider key={product.id} value={product}>
					<ProductCard onButtonClick={handleButtonClick} />
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
