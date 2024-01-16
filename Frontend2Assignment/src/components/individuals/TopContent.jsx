import styled from "styled-components";

const TopContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 28px;
	align-self: stretch;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: stretch;
`;

const Headline = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;
	margin: 0;
`;
const P600 = styled.p`
	font-size: 18px;
	font-weight: 600;
	margin: 0;
`;

function TopContent() {
	return (
		<TopContainer>
			<ImageContainer>
				<img
					src="/src/images/chair.png"
					alt="Det skall komma en bild här"
					style={{ height: "200px", width: "273.5px" }}
				/>
			</ImageContainer>
			<Headline>
				<P600>Product Headline</P600>
			</Headline>
		</TopContainer>
	);
}

export default TopContent;
