import { useContext } from "react";
import Slider from "../individual/Slider";
import styled from "styled-components";
import { DetailContext } from "./ProductDetailContent";
import Thumbnails from "../individual/Thumbnails";
import PriceArea from "./PriceArea";

const StyledCMSGallery = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
	align-self: stretch;
`;
const CMSGallery = () => {
	const prod = useContext(DetailContext)
	return (
		<StyledCMSGallery>
			<Slider />
			{prod.prod.attributes.Slider.data.length == 1 ? "" : <Thumbnails  />}
			<PriceArea/>
		</StyledCMSGallery>
	);
}

export default CMSGallery;

