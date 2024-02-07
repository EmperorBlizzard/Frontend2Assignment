import styled from "styled-components";



const StyledHeadline = styled.div`
color: var(--Typestyle-Headlines, #2B3136);
font-feature-settings: 'clig' off, 'liga' off;

/* Headlines/H1 */
font-family: Inter;
font-size: 2.25rem;
font-style: normal;
font-weight: 700;
line-height: 2.5rem; /* 111.111% */
width: 55.625rem;

`;

const ShoppingCartContainer = () => {

    return(

        <div>
            <StyledHeadline>Varukorg</StyledHeadline>
            
            

        </div>
                
        
    );

}
export default ShoppingCartContainer;