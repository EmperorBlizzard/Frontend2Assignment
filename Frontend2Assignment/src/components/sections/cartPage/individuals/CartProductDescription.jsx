import styled from "styled-components";
 

const StyledDescription = styled.div`
display: flex;
padding-top: 0.5rem;
flex-direction: column;
align-items: flex-start;

flex: 1 0 0;

`;

const CartProductDescription = () => {
    return (  
        <StyledDescription>
            <h3>Name</h3>
            <p>Articlenumber</p>
            <p>Category</p>
            <p>Sex</p>


        </StyledDescription>
    );
}

export default CartProductDescription;