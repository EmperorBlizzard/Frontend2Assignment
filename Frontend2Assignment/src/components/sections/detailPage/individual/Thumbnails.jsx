import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import { useContext } from "react";
import { DetailContext } from "../Sections/ProductDetailContent";

const StyleThumbnails = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const StyledSlider = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const Thumbnails = () => {
	const { prod } = useContext(DetailContext);

	const SliderTumbNail = () => {
	const dataSlider = prod.attributes.Slider.data;
	const tempAdress = import.meta.env.VITE_STRAPI_URL.toString()
	const adress = tempAdress.replace("/api/", "")
	return (
		<StyledSlider>
				{dataSlider.map((img) => {
					const prop = adress + img.attributes.url;
					return <Thumbnail prop={prop} key={img.id} />;
				})}
			</StyledSlider>
		);
	};

	return (
		<StyleThumbnails>
			<SliderTumbNail />
		</StyleThumbnails>
	);
};

export default Thumbnails;
