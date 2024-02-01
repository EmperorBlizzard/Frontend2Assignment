import TopContent from "../individuals/TopContent";
import PCardDescription from "../individuals/PCardDescription";
import PriceBuyButton from "../individuals/PriceBuyButton";
import styled from "styled-components";
import PropTypes from 'prop-types'

const PCard = styled.div`
	display: flex;
	width: 305px;
	padding: 16px;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border: 1px solid #798490;
	border-radius: 0.7rem;
	box-shadow: 0 0 5px;
`;

const ProductCard = ({onButtonClick}) => {
	return (
		<PCard>
			<TopContent />
			<PCardDescription />
			<PriceBuyButton onButtonClick={onButtonClick}/>
		</PCard>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	onButtonClick: PropTypes.func
}
