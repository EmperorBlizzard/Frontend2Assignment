import TopContent from "../individuals/TopContent";
import PCardDescription from "../individuals/PCardDescription";
import PriceBuyButton from "../individuals/PriceBuyButton";
import styled from "styled-components";

const PCard = styled.div`
    display: flex;
    width: 305px;
    height: 647px;
    padding: 16px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid #798490;
`

function ProductCard() {
	return (
        <PCard>
			<TopContent/>
			<PCardDescription/>
			<PriceBuyButton/>
        </PCard>
	);
}

export default ProductCard;
