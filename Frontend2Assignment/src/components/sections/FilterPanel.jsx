import Filter from "../individuals/Filter";
import styled from "styled-components";

const Panel = styled.div({
	display: "flex",
	alignItems: "flex-start",
	alignContent: "flex-start",
	gap: "16px",
	alignSelf: "stretch",
	flexWrap: "wrap",
});

function FilterPanel() {
	return (
		<>
			<Panel>
				<Filter />
				<Filter />
				<Filter />
				<Filter />
				<Filter />
			</Panel>
		</>
	);
}

export default FilterPanel;
