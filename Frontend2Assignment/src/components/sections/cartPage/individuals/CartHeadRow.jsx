import styled from "styled-components";

const StyledCartheadrow = styled.div`
display: flex;
align-items: flex-start;
padding-bottom: 0.625rem;

align-self: stretch;
width: 55.625rem;

border-bottom: 1px solid var(--Border-Default, #798490);
`;

const HeadRowItem = styled.h5`
  color: var(--Typestyle-Headlines, #2B3136);
  font-feature-settings: 'clig' off, 'liga' off;
  /* Headlines/H5 */
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3125rem; /* 131.25% */
  margin-right: 20.25rem;
  
`;


const Cartheadrow = () => {

    
    return (  
      
        <StyledCartheadrow>
            <HeadRowItem>Product</HeadRowItem>
            <HeadRowItem>Quantity</HeadRowItem>
            <HeadRowItem>Subtotal</HeadRowItem>
        </StyledCartheadrow>

        );
};
 
export default Cartheadrow;