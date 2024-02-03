import styled from "styled-components";
import ProductSectionPDS from "../individual/ProductSectionTop";
import { useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ProductDesc from "../individual/ProductDesc";
import Thumbnails from "../individual/Thumbnails";

const StyledProduductDetailContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 0rem;
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

const ProductDetailContent = () => {
	const { id } = useParams();
	const [prod, setProd] = useState(null);
	const [dispImage, setDispImage] = useState("http://localhost:1337/"+prod)
	
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
		<DetailContext.Provider value={prod}>
			<StyledProduductDetailContent>
				<StyledProductName>{prod.attributes.productName}</StyledProductName>
				<ProductSectionPDS />
				{ !prod.attributes.Slider.data ? "" : <Thumbnails/>}
				<ProductDesc/>
			</StyledProduductDetailContent>
		</DetailContext.Provider>
	);
}

export default ProductDetailContent;
