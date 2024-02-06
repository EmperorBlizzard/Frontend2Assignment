import { useContext } from "react";
import Slider from "../individual/Slider";
import styled from "styled-components";
import { DetailContext } from "./ProductDetailContent";
import Thumbnails from "../individual/Thumbnails";

const StyledCMSGallery = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
	align-self: stretch;
`;
const CMSGallery = () => {
	const prod = useContext(DetailContext)
	console.log(prod.prod.attributes.Slider.data)
	return (
		<StyledCMSGallery>
			<Slider />
			{prod.prod.attributes.Slider.data.length == 1 ? "" : <Thumbnails  />}
		</StyledCMSGallery>
	);
}

export default CMSGallery;

{/*  */}