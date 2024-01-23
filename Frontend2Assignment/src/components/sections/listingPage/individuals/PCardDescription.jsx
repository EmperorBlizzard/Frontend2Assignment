import styled from "styled-components";
import PropTypes from "prop-types";

const DescriptionContainer = styled.div({
	display: "flex",
	height: "63px",
	alignItems: "flex-start",
	alignSelf: "stretch",
});

const DescriptionCon = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "16px",
	alignSelf: "stretch",
});

const StyledP = styled.p`fontSize: "14px", fontWeight: "400", lineHeight: "21px", margin:0
`;

const Description = ({ description }) => {
	return (
		<DescriptionCon>
			<DescriptionContainer>
				<StyledP>{description}</StyledP>
			</DescriptionContainer>
		</DescriptionCon>
	);
};

Description.propTypes = {
	description: PropTypes.string,
	pRange: PropTypes.string,
};

export default Description;
