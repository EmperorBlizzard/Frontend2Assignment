import styled from "styled-components";

const Panel = styled.div`
	display: flex;
	align-items: flex-start;
	align-content: flex-start;
	gap: 16px;
	align-self: stretch;
	flex-wrap: wrap;
`;

const Filter = styled.select`
	display: flex;
	width: 106px;
	height: 40px;
	padding: 8.5px 16px;
	justify-content: space-between;
	align-items: center;
	border: 1px solid  #798490;
	background: #FFF;
`;

function FilterPanel() {
	return (
		<Panel>
			<Filter>
				<option value="Filter">------</option>
				<option value="Filter">Kläder</option>
			</Filter>
			<Filter>
				<option value="Filter">------</option>
				<option value="Filter">Herr</option>
			</Filter>
			<Filter>
				<option value="Filter">------</option>
				<option value="Filter">Dam</option>
			</Filter>
			<Filter>
				<option value="Filter">------</option>
				<option value="Filter">Barn</option>
			</Filter>
			<Filter>
				<option value="Filter">Storlek</option>
				<option value="Filter">Small</option>
				<option value="Filter">Medium</option>
				<option value="Filter">Large</option>
			</Filter>
		</Panel>
	);
}

export default FilterPanel;
