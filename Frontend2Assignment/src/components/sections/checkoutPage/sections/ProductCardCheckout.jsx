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
    const imgLink = `${import.meta.env.VITE_STRAPI_URL}${card.image}`
    console.log(imgLink)
    const img = imgLink.replace("http://localhost:1337/api//", "http://localhost:1337/")
    console.log(img)
    return ( 
        <StyledPCC>
            <img src={img} alt="produktbild" />
            <ProdInfo>
                <h2>Produktnamn:{card.productName}</h2>
                <h2>Pris:{card.price}</h2>
                <h2>Antal:</h2>
                
            </ProdInfo>

        </StyledPCC>
     );


}
 
export default ProductCardCheckout;