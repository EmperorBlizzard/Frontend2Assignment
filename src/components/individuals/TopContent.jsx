import styled from "styled-components";

const TopContainer = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "28px",
	alignSelf: "stretch",
});

const ImageContainer = styled.div({
    display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	alignSelf: "stretch",
});

const Headline = styled.div({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    alignSelf: 'stretch',
    margin: '0'
});

function TopContent() {
	return (
		<TopContainer>
			<ImageContainer>
				<img
					src="./src/images/chair.png"
					alt="Det skall komma en bild här"
					style={{ height: "200px", width: "273.5px" }}
				/>
			</ImageContainer>
			<Headline>
				<p style={{ fontSize: "18px", fontWeight: 600, margin: 0 }}>Product Headline</p>
				<p style={{ fontSize: "12px", fontWeight: 400, margin: 0 }}>Diameter: 9,9 mm</p>
			</Headline>
		</TopContainer>
	);
}

export default TopContent;
