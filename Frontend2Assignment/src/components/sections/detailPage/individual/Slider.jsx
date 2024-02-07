import styled from "styled-components";
import { DetailContext } from "../Sections/ProductDetailContent";
import { useContext } from "react";

const StyledImg = styled.img`
	max-width: 100%; /* Bilden kommer inte att vara bredare än dess naturliga storlek */
	height: auto; /* Behåll proportionerna när bredden ändras */
	display: block; /* Ta bort extra mellanrum under bilden */
	margin: auto; /* Centrera bilden i dess förälderselement */
`;

const Slider = () => {
	const { dispImage } = useContext(DetailContext);
	return (
		<>
			<StyledImg src={dispImage} alt="Här skall de vara en bild" />
		</>
	);
};

export default Slider;
