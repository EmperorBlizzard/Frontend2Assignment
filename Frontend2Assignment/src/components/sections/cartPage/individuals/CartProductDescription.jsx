import styled from "styled-components";
import { useContext } from "react";
import { TempCartContext } from "../sections/CartContent.jsx"

const StyledDescription = styled.div`
display: flex;
padding-top: 0.5rem;
flex-direction: column;
align-items: flex-start;

flex: 1 0 0;

`;

const CartProductDescription = () => {
    const tempContext = useContext(TempCartContext);
    const imgLink = `${tempContext.image}`
    const prodctName = `${tempContext.name}`
    const prductCategory = `${tempContext.category} `

    return (
        <StyledDescription>
            <div>
                <img src={imgLink} alt="Bild på cyckel" />
            </div>
            <h3>{prodctName}</h3>
            <p>Articlenumber</p>
            <p>{prductCategory}</p>
            <p>Sex</p>
        </StyledDescription>
    );
}

export default CartProductDescription;