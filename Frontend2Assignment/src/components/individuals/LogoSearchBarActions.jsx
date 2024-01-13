import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import SearchInput from './SearchInput'
import HeaderActions from './HeaderActions'

const LogoSearchBarActionsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
`

function LogoSearchBarActions() {
  return (
    <LogoSearchBarActionsDiv>
        <Logo />
        <SearchInput />
        <HeaderActions />
    </LogoSearchBarActionsDiv>
  )
}

export default LogoSearchBarActions