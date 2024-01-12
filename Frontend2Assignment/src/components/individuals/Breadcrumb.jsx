import styled from "styled-components";

const P = styled.p({
	display: "flex",
	height: "19px",
	padding: "0px 20px",
	alignItems: "center",
	alignSelf: "stretch",
});

function Breadcrumb() {
	return <P>breadcrumb breadcrumb breadcrumb</P>;
}

export default Breadcrumb;
