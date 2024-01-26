import styled from "styled-components";
import { createContext, useState } from "react";

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

export const BikeContext = createContext(null)

const FilterPanel = () => {
	const [sortValueBike, setSortValueBike] = useState("");

	const handleSortChangeBike = (event)=> {
		const selectedValue = event.target.value
		setSortValueBike(selectedValue);
	};
	return (
		<BikeContext.Provider value={sortValueBike}>
		<Panel>
			<Filter>
				<option value="Filter">Sex</option>
				<option value="Filter">Female</option>
				<option value="Filter">Male</option>
			</Filter>
			<Filter onChange={handleSortChangeBike}>
				<option value="">Bike</option>
				<option value="Roadbike">Roadbike</option>
				<option value="MTB">MTB</option>
				<option value="Elbike">Elbike</option>
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
		</BikeContext.Provider>
	);
}

export default FilterPanel;
