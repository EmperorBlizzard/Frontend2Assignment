import ProductCardContainer from "./ProductCardContainer";
import FilterPanel from "../individuals/FilterPanel";
import TopPagination from "./TopPagination";
import styled from "styled-components";
import Pagination from "../individuals/Pagination";
import { useState } from "react";

const PageContentStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5rem;
`

const PageContent = () => {
	const [filter, setFilter] = useState("products?&populate=*")
	return (
		<PageContentStyle>
			<FilterPanel filter={filter} setFilter={setFilter}/>
			<TopPagination />
			<ProductCardContainer filter={filter} />
			<Pagination />
		</PageContentStyle>
	);
}

export default PageContent;
