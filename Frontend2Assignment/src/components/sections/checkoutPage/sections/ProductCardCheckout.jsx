import styled from "styled-components";

const StyledPCC = styled.div`
display: flex;
flex-direction: row;
    
`
const ProdInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductCardCheckout  = ({card}) => {
    return ( 
        <StyledPCC>
            <img src={card.image} alt="produktbild" />
            <ProdInfo>
                <h2>Produktnamn:{card.productName}</h2>
                <h2>Pris:{card.price}</h2>
                <h2>Antal:</h2>
                <h2>{card.image}</h2>
            </ProdInfo>

        </StyledPCC>
     );


}
 
export default ProductCardCheckout;