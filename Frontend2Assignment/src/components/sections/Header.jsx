import React from 'react'
import styled from 'styled-components';

import LogoSearchBarActions from '../individuals/LogoSearchBarActions';
import HeaderNavigation from '../individuals/HeaderNavigation';
import DeleteMe from '../individuals/DeleteMe';


const StyledHeader = styled.header`
  background-color: salmon;
  display: flex;
  width: 87.5rem;
  padding: 0rem 1.25rem 1rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  `;

function Header() {
  return (
    <StyledHeader>
      <LogoSearchBarActions />
      <HeaderNavigation />
      <DeleteMe />
    </StyledHeader>
    
  )
}

export default Header