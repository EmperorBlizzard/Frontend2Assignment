import styled from "styled-components";
import ProductSectionTop from "../individual/ProductSectionTop";
import ProductDescription from "../individual/ProductDescription";

const StyledProductSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;`

function ProductSection() {
    return ( <StyledProductSection>
        <ProductSectionTop/>
        <ProductDescription/>
    </StyledProductSection> );
}

export default ProductSection;