import styled from "styled-components";
import PropTypes from "prop-types"

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

const test = () => {
    console.log
}

const Thumbnail = ({ kolla }) => {
	return (
		<StyledThumbnail>
            <button onClick={() => {
                test(kolla)
            }}>
			<StyledImg src={kolla} alt="Bild" />
            </button>
		</StyledThumbnail>
	);
}

Thumbnail.propTypes = {
    kolla: PropTypes.string
}

export default Thumbnail;
