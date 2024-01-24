// Denna kommer till användning när man krymper ihop för att ha den mobil anpassad

import styled from "styled-components";

const StyledButton = styled.button`
	display: flex;
	height: 3rem;
	padding: 0rem 0.875rem;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	align-self: stretch;
	border: 1px solid #0b539b;
	background-color: white;
`;

const StyledFilterText = styled.p`
	color: #0b539b;
	font-family: Inter;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.3125rem;
`;

const StyledFilterIcon = styled.svg`
width: 1.125rem;
height: 1.125rem;

`

function ButtonFilter() {
	return (
		<StyledButton>
			<StyledFilterIcon>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.87803 15.75L0.75 15.75C0.335787 15.75 0 15.4142 0 15C0 14.5858 0.335787 14.25 0.75 14.25L9.87803 14.25C10.1869 13.3761 11.0203 12.75 12 12.75C12.9835 12.75 13.8196 13.381 14.1256 14.2603C14.166 14.2535 14.2076 14.25 14.25 14.25H17.25C17.6642 14.25 18 14.5858 18 15C18 15.4142 17.6642 15.75 17.25 15.75H14.25C14.2076 15.75 14.166 15.7465 14.1256 15.7397C13.8196 16.619 12.9835 17.25 12 17.25C11.0203 17.25 10.1869 16.6239 9.87803 15.75ZM7.37197 9.75C7.06309 10.6239 6.22966 11.25 5.25 11.25C4.27034 11.25 3.43691 10.6239 3.12803 9.75H0.75C0.335787 9.75 0 9.41421 0 9C0 8.58579 0.335787 8.25 0.75 8.25H3.12803C3.43691 7.37611 4.27034 6.75 5.25 6.75C6.22966 6.75 7.06309 7.37611 7.37197 8.25H17.25C17.6642 8.25 18 8.58579 18 9C18 9.41421 17.6642 9.75 17.25 9.75H7.37197ZM9.87803 3.75L0.75 3.75C0.335787 3.75 0 3.41421 0 3C0 2.58579 0.335787 2.25 0.75 2.25L9.87803 2.25C10.1869 1.37611 11.0203 0.75 12 0.75C12.9797 0.75 13.8131 1.37611 14.122 2.25H17.25C17.6642 2.25 18 2.58579 18 3C18 3.41421 17.6642 3.75 17.25 3.75L14.122 3.75C13.8131 4.62389 12.9797 5.25 12 5.25C11.0203 5.25 10.1869 4.62389 9.87803 3.75ZM12 2.25C11.5858 2.25 11.25 2.58579 11.25 3C11.25 3.41421 11.5858 3.75 12 3.75C12.4142 3.75 12.75 3.41421 12.75 3C12.75 2.58579 12.4142 2.25 12 2.25ZM12.75 15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15ZM6 9C6 8.58579 5.66421 8.25 5.25 8.25C4.83579 8.25 4.5 8.58579 4.5 9C4.5 9.41421 4.83579 9.75 5.25 9.75C5.66421 9.75 6 9.41421 6 9Z"
						fill="#0B539B"
					/>
				</svg>
			</StyledFilterIcon>
			<StyledFilterText>
				
				Filter
			</StyledFilterText>
		</StyledButton>
	);
}

export default ButtonFilter;
