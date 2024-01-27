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

export const BikeContext = createContext("");

const FilterPanel = () => {
	const [sortValueBike, setSortValueBike] = useState("");

	const handleSortChangeBike = (event) => {
		const selectedValue = event.target.value;
		setSortValueBike(selectedValue);
	};
	return (
		<BikeContext.Provider value={sortValueBike}>
			<Panel>
				<Filter>
					<option value="Gender">Gender</option>
					<option value="Female">Female</option>
					<option value="Male">Male</option>
				</Filter>
				<Filter onChange={handleSortChangeBike}>
					<option value="">Bike</option>
					<option value="Roadbike">Roadbike</option>
					<option value="MTB">MTB</option>
					<option value="Elbike">Elbike</option>
				</Filter>
				<Filter>
					<option value="Size">Size</option>
					<option value="Small">Small</option>
					<option value="Medium">Medium</option>
					<option value="Large">Large</option>
				</Filter>
				<Filter>
					<option value="nameA-Z">Namn A-Z</option>
					<option value="nameZ-A">Namn Z-A</option>
					<option value="PriceLowHigh">Price Låg-Hög</option>
					<option value="PriceHighLow">Price Hög-Låg</option>
					<option value="BestChoice">Best Choice</option>
				</Filter>
			</Panel>
		</BikeContext.Provider>
	);
};

export default FilterPanel;
