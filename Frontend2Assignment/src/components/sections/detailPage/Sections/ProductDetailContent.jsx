import styled from "styled-components";
import ProductSectionPDS from "../individual/ProductSectionTop";
import { useParams, Link } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const StyledProduductDetailContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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

const Button = styled.button`
	display: flex;
	height: 44px;
	padding: 0px 14px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	background-color: #0b539b;
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	line-height: 20px;
	border-radius: 0.7rem;
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
				//console(prod.data.data[id].attributes.productName)
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
				<Link to="/listingPage">
					<Button>HomePage</Button>
				</Link>
			</StyledProduductDetailContent>
		</DetailContext.Provider>
	);
}

export default ProductDetailContent;
