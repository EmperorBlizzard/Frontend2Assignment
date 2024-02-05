import styled from "styled-components";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DetailContext } from "../Sections/ProductDetailContent";

const StyledThumbnail = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem;
	justify-content: center;
	align-items: center;
`;

const StyledImg = styled.img`
	height: 4rem;
	widht: 4rem;
`;

const Thumbnail = ({prop}) => {
	const { setDispImage } = useContext(DetailContext);
	function handleClick() {
		setDispImage(prop);
	}
	
	return (
		<StyledThumbnail>
			<StyledImg src={prop} onClick={handleClick} alt="Bild" />
		</StyledThumbnail>
	);
};

Thumbnail.propTypes = {
	prop: PropTypes.string,
};

export default Thumbnail;
