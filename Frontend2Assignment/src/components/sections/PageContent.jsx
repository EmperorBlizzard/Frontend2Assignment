import ProductCardContainer from "./ProductCardContainer";
import Breadcrumb from "../individuals/Breadcrumb";
import FilterPanel from "./FilterPanel";
import TopPagination from "./TopPagination";
import styled from "styled-components";
import Pagination from "../individuals/Pagination";
import ButtonFilter from "../individuals/ButtonFilter";

const PageContentStyle = styled.div`
display: flex;
flex-direction: column;
align-Items: flex-start;
gap: 10px;
`



function PageContent() {
	return (
		<PageContentStyle>
			<Breadcrumb />
			<FilterPanel />
			<ButtonFilter/>
			<TopPagination />
			<ProductCardContainer />
			<Pagination />
		</PageContentStyle>
	);
}

export default PageContent;
