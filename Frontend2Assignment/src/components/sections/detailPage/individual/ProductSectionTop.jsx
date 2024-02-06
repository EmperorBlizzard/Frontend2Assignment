import CMSGallery from "../Sections/CMSGallery";
import PriceArea from "../Sections/PriceArea";
import styled from "styled-components";
const StyledPST = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.625rem;
	align-self: stretch;
`;

function ProductSectionTop() {
	return (
		<StyledPST>
			<CMSGallery />
			<PriceArea />
		</StyledPST>
	);
}

export default ProductSectionTop;
