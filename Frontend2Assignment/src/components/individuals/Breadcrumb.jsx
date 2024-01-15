import styled from "styled-components";

const P = styled.p`
	display: flex;
	height: 19px;
	padding: 0px 20px;
	align-items: center;
	align-self: stretch;
`;

const BcLink = window.location.href
let NewBcLink = BcLink.replace("http://localhost:5173/", " GroupAssignment > ")

function Breadcrumb() {
	return <P>{NewBcLink}</P>;
}

export default Breadcrumb;
