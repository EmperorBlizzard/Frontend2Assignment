import styled from "styled-components";
import { useState } from "react";

const InputContainer = styled.div`
display: flex;
height: 2.5rem;
max-width: 15rem;
align-items: center;
align-self: stretch;
border: 1px solid var(--Border-Default, #798490);
background: var(--Generic-White, #FFF);
`;

const InputText = styled.div`
display: flex;
padding-left: 0.75rem;
align-items: center;
flex-grow: 1;
`;

const IconContainer = styled.div`
display: flex;
align-items: flex-start;  
`;

const IconColor = styled.div`
display: flex;
width: 2.5rem;
height: 2.5rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
background: var(--Main-theme-color-Secondary-Default, #3D444D); 
cursor: pointer;
`;

const IconCheckMark = styled.svg`
width: 1.25rem;
height: 1.25rem;
flex-shrink: 0;  
`;

const InputLink = styled.div`
display: flex;
align-items: center;  
`;

const InputLinkText = styled.div`
color: var(--Main-theme-color-Primary-Default, #0B539B);
font-feature-settings: 'clig' off, 'liga' off;

/* Body/Bold */
font-family: Inter;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: 1.3125rem; /* 150% */
`;
const DirectionMarkRightIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    onClick={() => (window.location.href = "https://shipping-details-link")}
    style={{ cursor: "pointer" }}>
<path fillRule="evenodd" clipRule="evenodd" d="M9.29289 15.2929C8.90237 15.6834 8.90237 16.3166 9.29289 16.7071C9.68342 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L10.7071 7.29289C10.3166 6.90237 9.68342 6.90237 9.29289 7.29289C8.90237 7.68342 8.90237 8.31658 9.29289 8.70711L12.5858 12L9.29289 15.2929Z" fill="#798490"/>
</svg>

);

const InputPlusLink = () => {
    const [inputValue, setInputValue] = useState("");
  
    const handleIconClick = () => {
      // Här kan du lägga till den önskade logiken när ikonen klickas
      console.log("Icon clicked!");
    };

    return (
        <InputContainer>
          <InputText>
            <input
              placeholder="Enter productnumber..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </InputText>
          <IconContainer>
            <IconColor onClick={handleIconClick}>
              <IconCheckMark>
                {/* Här placeras SVG-ikon (CheckMarkIcon) */}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.2559 8.57745C1.93046 8.25201 1.40283 8.25201 1.07739 8.57745C0.751954 8.90289 0.751954 9.43053 1.07739 9.75596L6.91072 15.5893C7.23616 15.9147 7.7638 15.9147 8.08923 15.5893L18.9226 4.75596C19.248 4.43053 19.248 3.90289 18.9226 3.57745C18.5971 3.25201 18.0695 3.25201 17.7441 3.57745L7.49998 13.8215L2.2559 8.57745Z"
                  fill="white"
                />
              </IconCheckMark>
            </IconColor>
          </IconContainer>
        </InputContainer>
      );
    };
    
    export default InputPlusLink;