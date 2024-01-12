import styled from "styled-components";

const FilterPanel = styled.select({
	display: "flex",
	width: "106px",
	height: "40px",
	padding: "8.5px 16px",
	justifyContent: "space-between",
	alignItems: "center",
	border: "1px solid  #798490",
	background: "#FFF",
});

function Filter() {
	return (
		<FilterPanel>
			<option value="Filter">Filter</option>
		</FilterPanel>
	);
}

export default Filter;
