import styled from "styled-components";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../sections/ProductCardContainer";

const DescriptionContainer = styled.div`
	display: flex;
	padding: 1rem 0;
	align-items: flex-start;
	align-self: stretch;
`;

const DescriptionCon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	align-self: stretch;
`;
const StyledP = styled.p`
	fontsize: 14px;
	fontweight: 400;
	lineheight: 21px;
	margin: 0;
`;

const Description = () => {
	const prod = useContext(ProductContext);
	return (
		<DescriptionCon>
			<DescriptionContainer>
				<StyledP>{prod.attributes.shortDescription}</StyledP>
			</DescriptionContainer>
		</DescriptionCon>
	);
};

Description.propTypes = {
	description: PropTypes.string,
};

export default Description;
