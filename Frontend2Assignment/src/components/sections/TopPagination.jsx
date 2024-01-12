import Input from "../individuals/input";
import styled from "styled-components";
import Pagination from "../individuals/Pagination";

const TopPage = styled.div({
	display: "flex",
	width: "100%",
	height: "40px",
	justifyContent: "space-between",
	alignItems: "flex-start",
});
function TopPagination() {
	return (
		<TopPage>
			<Pagination/>
			<Input />
		</TopPage>
	);
}

export default TopPagination;
