
import styled from "styled-components";

const PurchaseButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
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
	background-color: #0b539b;
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	line-height: 20px;
	border-radius: 0.7rem;
`;


const handleClick = () => {
    console.log("Köpet har genomförts");
  };

const PurshaseButton = () =>{
  return(
    <PurchaseButtonContainer>
        <Button onClick={handleClick}>Complete purchase</Button>
    </PurchaseButtonContainer>
  );

};

export default PurshaseButton;