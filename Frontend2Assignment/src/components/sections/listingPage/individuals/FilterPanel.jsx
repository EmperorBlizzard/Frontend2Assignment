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
	border: 1px solid #798490;
	background: #fff;
	margin-top: 1rem;
`;
function FilterPanel() {
	return (
		<Panel>
			<Filter>
				<option value="Filter">Sex</option>
				<option value="Filter">Female</option>
				<option value="Filter">Male</option>
			</Filter>
			<Filter>
				<option value="Filter">Bike</option>
				<option value="Filter">Roadbike</option>
				<option value="Filter">MTB</option>
			</Filter>
			<Filter>
				<option value="Filter">Storlek</option>
				<option value="Filter">Small</option>
				<option value="Filter">Medium</option>
				<option value="Filter">Large</option>
			</Filter>
			<Filter>
			<option value="">Name A-Z</option>
			<option value="">Name Z-A</option>
			<option value="">Pris Låg-Hög</option>
			<option value="">Pris Hög-Låg</option>
			<option value="">Mest lämpade</option>
			</Filter>
		</Panel>
	);
}

export default FilterPanel;
