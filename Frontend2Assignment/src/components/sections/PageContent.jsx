import ProductRow from "./ProductRow";
import Breadcrumb from "../individuals/Breadcrumb";
import FilterPanel from "./FilterPanel";
import Pagination from "./TopPagination"
import styled from "styled-components";

const PageContentStyle = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "10px",
});

function PageContent() {
	return (
		<PageContentStyle>
			<Breadcrumb />
			<FilterPanel />
			<Pagination/>
			<ProductRow />
			<ProductRow />
		</PageContentStyle>
	);
}

export default PageContent;
