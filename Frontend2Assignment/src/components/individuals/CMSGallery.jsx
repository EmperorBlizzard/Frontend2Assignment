import Thumbnails from "./Thumbnails";
import Slider from "./Slider";
import styled from "styled-components";

const StyledCMSGallery = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 2.5rem;
	align-self: stretch;
`;
function CMSGallery() {
	return (
		<StyledCMSGallery>
			<Thumbnails />
			<Slider />
		</StyledCMSGallery>
	);
}

export default CMSGallery;
