import styled from "styled-components";

const StyledThumbnail = styled.div`
display: flex;
padding: 0.3125rem;
justify-content: center;
align-items: center;
border: 1px solid #798490
`

function Thumbnail() {
    return ( 
        <StyledThumbnail>
            <img src="src\images\Thumbnails\Placeholder 1.png" alt="" />
        </StyledThumbnail>
     );
}

export default  Thumbnail;