import styled from "styled-components";
import Pagination from "../individuals/Pagination";

const TopPage = styled.div`
	display: flex;
	width: 100%;
	height: 40px;
	justify-content: space-between;
	align-items: flex-start;
`;

function TopPagination() {
	return (
		<TopPage>
			<Pagination />
		</TopPage>
	);
}

export default TopPagination;
