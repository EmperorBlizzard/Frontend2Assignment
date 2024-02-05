import ProductCardContainer from "./ProductCardContainer";
import FilterPanel from "../individuals/FilterPanel";
import styled from "styled-components";
import { useState } from "react";

const PageContentStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`

const PageContent = () => {
	const [filter, setFilter] = useState("products?&populate=*")
	return (
		<PageContentStyle>
			<FilterPanel filter={filter} setFilter={setFilter}/>
			<ProductCardContainer filter={filter} />
		</PageContentStyle>
	);
}

export default PageContent;
