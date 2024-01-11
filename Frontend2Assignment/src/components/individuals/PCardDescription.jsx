import styled from "styled-components";

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

const UnitContainer = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	alignSelf: "stretch",
});

const ProductPrice = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	alignSelf: "stretch",
});

function Description() {
	return (
		<DescriptionCon>
			<DescriptionContainer>
				<p style={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px", margin:0 }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio
					quis accusantium sunt error, harum conseq uuntur iusto...
				</p>
			</DescriptionContainer>
			<UnitContainer>
				<div className="UnitesPieces" style={{display: 'flex', alignItems: 'flex-start', gap: '4px', alignSelf: 'stretch'}}>
					<p style={{fontSize: '14px', fontWeight: 700, lineHeight: '21px', margin:0}}>Content:</p>
					<p style={{fontSize: '14px', fontWeight: 400, lineHeight: '21px', margin:0}}>100 pieces (1,50£/per piece)</p>
				</div>
			</UnitContainer>
			<ProductPrice>
				<div className="ProductPricVariant" style={{display: 'flex', alignItems: 'flex-start', gap: '4px', alignSelf: 'stretch'}}>
					<p style={{fontSize: '12px', fontWeight: 400, lineHeight: '18px', margin:0}}>Variants from</p>
					<p style={{fontSize: '12px', fontWeight: 700, lineHeight: '18px', margin:0}}>£133,00*</p>
				</div>
			</ProductPrice>
		</DescriptionCon>
	);
}

export default Description;
