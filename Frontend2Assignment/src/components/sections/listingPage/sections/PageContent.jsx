import ProductCardContainer from "./ProductCardContainer";
import FilterPanel from "../individuals/FilterPanel";
import TopPagination from "./TopPagination";
import styled from "styled-components";
import Pagination from "../individuals/Pagination";

const PageContentStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5rem;
`

function PageContent() {
	return (
		<PageContentStyle>
			<FilterPanel />
			<TopPagination />
			<ProductCardContainer />
			<Pagination />
		</PageContentStyle>
	);
}

export default PageContent;
