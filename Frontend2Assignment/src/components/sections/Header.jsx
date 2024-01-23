import React from 'react'
import styled from 'styled-components';

import LogoSearchBarActions from '../individuals/LogoSearchBarActions';
import HeaderNavigation from '../individuals/HeaderNavigation';
import Menu from '../individuals/Menu';


const StyledHeader = styled.header`
  background-color: salmon;
  display: flex;
  width: 87.5rem;
  padding: 2rem 1.25rem 1rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  `;

function Header() {
  return (
    <StyledHeader>
      <LogoSearchBarActions />
      <HeaderNavigation />
      <Menu />
    </StyledHeader>
    
  )
}

export default Header