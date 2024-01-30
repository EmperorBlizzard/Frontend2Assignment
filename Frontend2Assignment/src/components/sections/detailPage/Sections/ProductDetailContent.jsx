import styled from "styled-components";
import ProductSectionPDS from "../individual/ProductSectionTop";
import { useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ProductDesc from "../individual/ProductDesc";

const StyledProduductDetailContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 5rem;
`;

const StyledProductName = styled.p`
	color: #2b3136;
	font-family: Inter;
	font-size: 2.25rem;
	font-style: normal;
	font-weight: 600;
	line-height: 2.6875rem;
`;


export const DetailContext = createContext();

function ProductDetailContent() {
	const { id } = useParams();
	const [prod, setProd] = useState(null);

	useEffect(() => {
		const fetshData = async () => {
			try {
				const response = await axios.get(
					import.meta.env.VITE_STRAPI_URL + `products?&populate=*`
				);
				setProd(response.data.data[id - 1]);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};
		fetshData();
	}, [id]);

	if (!prod) {
		return <p>Loading...</p>;
	}
	return (
		<DetailContext.Provider key={prod.id} value={prod}>
			<StyledProduductDetailContent>
				<StyledProductName>{prod.attributes.productName}</StyledProductName>
				<ProductSectionPDS />
				<ProductDesc/>
			</StyledProduductDetailContent>
		</DetailContext.Provider>
	);
}

export default ProductDetailContent;
