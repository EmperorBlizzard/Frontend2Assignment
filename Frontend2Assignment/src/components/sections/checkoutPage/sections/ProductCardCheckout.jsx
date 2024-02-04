import styled from "styled-components";



const StyledPCC = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid black;
  border-radius: 8px; */
  margin: 1rem;
`;
const ProdInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 0.5rem;
`;
const StyledImg = styled.img`
  width: 7rem;
  height: 7rem;
  padding: 1rem;
`;

const StyledP = styled.p`
  margin: 0;
  font-weight: bold;
`;

const ProductCardCheckout = ({ card, totalPrice }) => {
  
  const imgLink = `${import.meta.env.VITE_STRAPI_URL}${card.image}`;
  const img = imgLink.replace(
    "http://localhost:1337/api//",
    "http://localhost:1337/"
  );
  

  return (
    <StyledPCC>
      <StyledImg src={img} alt="produktbild" className="test" />
      <ProdInfo>
        <StyledP>{card.productName}</StyledP>
        <StyledP>Pris: {card.price}</StyledP>
        <StyledP>Antal: {card.amountOfProducts}</StyledP>
                
      </ProdInfo>
    </StyledPCC>
  );
};

export default ProductCardCheckout;
