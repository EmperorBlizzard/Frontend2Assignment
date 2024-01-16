import styled from "styled-components";

const PriceBuyButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
`;

const Button = styled.button`
display: flex;
height: 44px;
padding: 0px 14px;
justify-content: center;
align-items: center;
gap: 8px;
align-self: stretch;
background-color: #0B539B;
color: #FFF;
font-size:18px;
font-weight: 600;
line-height:20px;
`
;

function handleClick(){
    console.log("Köp köp")
}

function handleInfoClick() {
	console.log("Skicka till infoSidan")
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
			<Button onClick={handleInfoClick}>
				Info
			</Button>
		</PriceBuyButtonContainer>
	);
}

export default PriceBuyButton;
