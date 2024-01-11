import styled from "styled-components";

const PriceBuyButtonContainer = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "24px",
	alignSelf: "stretch",
});

const Button = styled.button({
	display: "flex",
	height: "44px",
	padding: "0px 14px",
	justifyContent: "center",
	alignItems: "center",
	gap: "8px",
	alignSelf: "stretch",
    backgroundColor: '#0B539B',
    color: '#FFF',
    fontSize:'18px',
    fontWeight: 600,
    lineHeight:'20px',
});

function handleClick(){
    console.log("Köp köp")
}

function PriceBuyButton() {
	return (
		<PriceBuyButtonContainer>
			<p
				style={{
					fontSize: "18px",
					fontWeight: "700",
					lineHeight: "22px",
					margin: 0,
				}}
			>
				£155,00*
			</p>
			<Button onClick={handleClick}>
				Add to shopping cart
			</Button>
		</PriceBuyButtonContainer>
	);
}

export default PriceBuyButton;
