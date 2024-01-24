import CMSGallery from "../Sections/CMSGallery";
import styled from "styled-components";
const StyledPST = styled.div`
display: flex;
align-items: center;
gap: 0.625rem;
align-self: stretch;`



function ProductSectionTop() {
    return ( 
        <StyledPST>
            <CMSGallery/>
        </StyledPST>
     );
}

export default ProductSectionTop;