import React from 'react'
import styled from 'styled-components'
import MenuLinks from './MenuLinks';

const SearchInputDiv = styled.div`
    display: flex;
    width: 25.0625rem;
    height: 2.5625rem;
    padding: 0rem 0.75rem 0rem 0rem;
    align-items: center;
    gap: 0.625rem;

    border: 1px solid var(--Border-Default, #798490);
    background: var(--Generic-White, #FFF);
`;

const ContentDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
`;

const InputTextDiv = styled.div`
    display: flex;
    align-items: flex-start;
    width:100%
`;

const InputSearch = styled.input`
    width:100%;
    height:auto;
    display: flex;
    align-items: center;
    align-self: stretch;
    padding-block: 0;
    padding-inline: 0;
`;

const SearchSvg = styled.svg`
    width: 1.25rem;
    height: 1.25rem;
`;






function SearchInput() {
  return (
    <SearchInputDiv>
        <InputSearch className='searchInput' title='Title' type='search' placeholder='Title ...'/>
        <MenuLinks 
            name={
                <SearchSvg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.41196 14.0999L3.92259 18.5893C3.59715 18.9147 3.06951 18.9147 2.74408 18.5893C2.41864 18.2638 2.41864 17.7362 2.74408 17.4108L7.23345 12.9214C6.3559 11.7925 5.83333 10.3739 5.83333 8.83335C5.83333 5.15146 8.8181 2.16669 12.5 2.16669C16.1819 2.16669 19.1667 5.15146 19.1667 8.83335C19.1667 12.5153 16.1819 15.5 12.5 15.5C10.9594 15.5 9.54087 14.9775 8.41196 14.0999ZM12.5 13.8334C15.2614 13.8334 17.5 11.5948 17.5 8.83335C17.5 6.07193 15.2614 3.83335 12.5 3.83335C9.73858 3.83335 7.5 6.07193 7.5 8.83335C7.5 11.5948 9.73858 13.8334 12.5 13.8334Z" fill="#798490"/>
                </SearchSvg>}
            link="/searchpage">
        </MenuLinks>
    </SearchInputDiv>
  )
}

export default SearchInput


/*

<ContentDiv>
    <InputTextDiv>
        <InputSearch className='searchInput' title='Title' type='search' placeholder='Title ...'/>
    </InputTextDiv>
    <a>
        <SearchSvg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.41196 14.0999L3.92259 18.5893C3.59715 18.9147 3.06951 18.9147 2.74408 18.5893C2.41864 18.2638 2.41864 17.7362 2.74408 17.4108L7.23345 12.9214C6.3559 11.7925 5.83333 10.3739 5.83333 8.83335C5.83333 5.15146 8.8181 2.16669 12.5 2.16669C16.1819 2.16669 19.1667 5.15146 19.1667 8.83335C19.1667 12.5153 16.1819 15.5 12.5 15.5C10.9594 15.5 9.54087 14.9775 8.41196 14.0999ZM12.5 13.8334C15.2614 13.8334 17.5 11.5948 17.5 8.83335C17.5 6.07193 15.2614 3.83335 12.5 3.83335C9.73858 3.83335 7.5 6.07193 7.5 8.83335C7.5 11.5948 9.73858 13.8334 12.5 13.8334Z" fill="#798490"/>
        </SearchSvg>
    </a>
</ContentDiv>

*/