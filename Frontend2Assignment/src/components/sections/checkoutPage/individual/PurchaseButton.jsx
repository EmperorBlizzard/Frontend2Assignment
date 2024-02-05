
import styled from "styled-components";

const PurchaseContainer = styled.div `
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 24px;
	align-self: stretch;
	margin: 15px;
`

const Button = styled.button`
	display: flex;
	height: 44px;
	padding: 0px 14px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	background-color: #0b539b;
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	line-height: 20px;
	border-radius: 0.7rem;
	cursor: pointer;
    
	&:hover {
    background-color: #2b3136;
  }

`;




const handleClick = () => {
    console.log("Köpet har genomförts");
  };

const PurchaseButton = () =>{
  return(
		<PurchaseContainer>
        <Button onClick={handleClick}>Complete purchase</Button>
		</PurchaseContainer>
  );

};

export default PurchaseButton;