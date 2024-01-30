
import styled from "styled-components";

const PurchaseButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	gap: 1.5rem;
	align-self: stretch;
	
`;

const Button = styled.button`
display: flex;
	height: 2.75rem;
	padding: 0 0.875rem;
	justify-content: center;
	align-items: flex-end;
	gap: 0.5rem;
	align-self: stretch;
	background-color: #0b539b;
	color: #fff;
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 1.25rem;
	border-radius: 0.7rem;
`;


const handleClick = () => {
    console.log("Köpet har genomförts");
  };

const PurchaseButton = () =>{
  return(
    <PurchaseButtonContainer>
        <Button onClick={handleClick}>Complete purchase</Button>
    </PurchaseButtonContainer>
  );

};

export default PurchaseButton;