import styled from "styled-components";

import PageContent from "../components/sections/listingPage/sections/PageContent";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

const ListingPageStyle = styled.div `
	display: flex;
	flex-direction: column;
	gap: 2.0625rem;
`


function ListingPage() {
	return (
		<ListingPageStyle>
			<Header />
			<PageContent />
			<Footer />
		</ListingPageStyle>
	);
}

export default ListingPage;
