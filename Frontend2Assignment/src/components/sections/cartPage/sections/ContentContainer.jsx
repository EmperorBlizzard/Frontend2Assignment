import CartContent from "./CartContent";
import SummaryContainer from "./SummaryContainer";
import styled from "styled-components";

const CartContentDiv = styled.div`
display:flex;

`


function ContentContainer() {
    return (
        <CartContentDiv>
            <CartContent />
            <SummaryContainer />
        </CartContentDiv>
    )
}

export default ContentContainer;