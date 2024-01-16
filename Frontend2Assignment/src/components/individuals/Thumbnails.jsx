import styled from "styled-components";
import Thumbnail from "./Thumbnail";

const StyleThumbnails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.625rem;
`;

function Thumbnails() {
	return (
		<StyleThumbnails>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="23"
				height="13"
				viewBox="0 0 23 13"
				fill="none"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.5 2.79634L20.9352 12.2315C21.2931 12.5895 21.8735 12.5895 22.2315 12.2315C22.5895 11.8735 22.5895 11.2931 22.2315 10.9351L12.1482 0.851798C11.7902 0.493818 11.2098 0.493818 10.8518 0.851798L0.768485 10.9351C0.410505 11.2931 0.410505 11.8735 0.768485 12.2315C1.12647 12.5895 1.70687 12.5895 2.06485 12.2315L11.5 2.79634Z"
					fill="#BCC1C7"
				/>
			</svg>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="13" viewBox="0 0 23 13" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M11.5 10.2036L2.06485 0.768443C1.70687 0.410463 1.12647 0.410463 0.768485 0.768443C0.410504 1.12642 0.410504 1.70683 0.768485 2.06481L10.8518 12.1481C11.2098 12.5061 11.7902 12.5061 12.1482 12.1481L22.2315 2.06481C22.5895 1.70683 22.5895 1.12643 22.2315 0.768445C21.8735 0.410465 21.2931 0.410465 20.9352 0.768445L11.5 10.2036Z" fill="#BCC1C7"/>
</svg>
		</StyleThumbnails>
	);
}

export default Thumbnails;
