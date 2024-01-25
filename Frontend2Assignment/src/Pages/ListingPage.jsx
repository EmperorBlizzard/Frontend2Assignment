import styled from "styled-components";

import PageContent from "../components/sections/listingPage/sections/PageContent";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

const ListingPageStyle = styled.div `
	display: inline-flex;
	width: 95%;
	flex-direction: column;
	align-items: center;
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
