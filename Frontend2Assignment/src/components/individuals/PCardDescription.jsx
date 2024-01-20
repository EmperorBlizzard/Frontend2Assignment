import styled from "styled-components";
import PropTypes from "prop-types"

const DescriptionContainer = styled.div({
	display: "flex",
	height: "63px",
	alignItems: "flex-start",
	alignSelf: "stretch",
});

const DescriptionCon = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "16px",
	alignSelf: "stretch",
});

const ProductPrice = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	alignSelf: "stretch",
});

const Description = ({description, pRange}) => {
	return (
		<DescriptionCon>
			<DescriptionContainer>
				<p style={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px", margin:0 }}>
					{description}
				</p>
			</DescriptionContainer>
			<ProductPrice>
				<div className="ProductPricVariant" style={{display: 'flex', alignItems: 'flex-start', gap: '4px', alignSelf: 'stretch'}}>
					<p style={{fontSize: '12px', fontWeight: 400, lineHeight: '18px', margin:0}}>Modeller mellan:</p>
					<p style={{fontSize: '12px', fontWeight: 700, lineHeight: '18px', margin:0}}>{pRange}</p>
				</div>
			</ProductPrice>
		</DescriptionCon>
	);
}

Description.propTypes = {
	description: PropTypes.string,
	pRange: PropTypes.string
}

export default Description;
