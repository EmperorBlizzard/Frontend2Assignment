import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

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

const FilterPanel = ({ setFilter }) => {
	const [bike, setBike] = useState("");
	const [gender, setGender] = useState("");

	useEffect(() => {
		setFilter(
			`products?${updateFilterBike(bike)}${updateFilterGender(
				gender
			)}populate=*`
		);
	}, [bike, gender, setFilter]);

	const updateFilterBike = (bike) => {
		switch (bike) {
			case "Roadbike":
				return "filters[category][title][$eqi]=Roadbike&";
			case "MTB":
				return "filters[category][title][$eqi]=MTB&";
			case "Elbike":
				return "filters[category][title][$eqi]=ELbike&";
			default:
				return "";
		}
	};
	const updateFilterGender = (bike) => {
		switch (bike) {
			case "Gender":
				return "";
			case "Unisex":
				return "filters[gender][title][$eqi]=Unisex&";
			case "Female":
				return "filters[gender][title][$eqi]=Female&";
			case "Male":
				return "filters[gender][title][$eqi]=Male&";
			default:
				return "";
		}
	};

	const handleSortChangeGender = (event) => {
		setGender(event.target.value);
	};

	const handleSortChangeBike = (event) => {
		setBike(event.target.value);
	};

	return (
		<Panel>
			<Filter onChange={handleSortChangeGender}>
				<option value="Gender">Gender</option>
				<option value="Unisex">Unisex</option>
				<option value="Female">Female</option>
				<option value="Male">Male</option>
			</Filter>
			<Filter onChange={handleSortChangeBike}>
				<option value="">Bike</option>
				<option value="Roadbike">Roadbike</option>
				<option value="MTB">MTB</option>
				<option value="Elbike">Elbike</option>
			</Filter>
		</Panel>
	);
};

FilterPanel.propTypes = {
	setFilter: PropTypes.any,
};

export default FilterPanel;
