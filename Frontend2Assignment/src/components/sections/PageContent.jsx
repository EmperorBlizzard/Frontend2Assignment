import ProductRow from "./ProductRow";
import Breadcrumb from "../individuals/Breadcrumb";
import FilterPanel from "./FilterPanel";
import styled from "styled-components";

const PageContentStyle = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "80px",
});

function PageContent() {
	return (
		<PageContentStyle>
			<Breadcrumb />
			<FilterPanel />
			<ProductRow />
		</PageContentStyle>
	);
}

export default PageContent;
