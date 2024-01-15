import styled from "styled-components";

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