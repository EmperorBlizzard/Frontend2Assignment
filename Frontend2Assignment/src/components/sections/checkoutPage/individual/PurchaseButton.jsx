
import styled from "styled-components";


const Button = styled.button`
	height: 2.75rem;
	padding: 0 0.875rem;
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
   
        <Button onClick={handleClick}>Complete purchase</Button>
   
  );

};

export default PurchaseButton;