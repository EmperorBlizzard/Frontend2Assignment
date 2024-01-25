import styles from '../../styling/HeaderStyle.module.css';

import LogoSearchBarActions from '../individuals/LogoSearchBarActions';
import Menu from '../individuals/Menu';
import Sidebar from '../individuals/Sidebar';
import Logo from '../individuals/Logo'
import SearchInput from '../individuals/SearchInput'
import HeaderActions from '../individuals/HeaderActions'

// const StyledHeader = styled.header`
//   display: grid;
//   width: 100%;
//   padding: 2rem 1.25rem 1rem 1.25rem;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 1.5rem;
//   `;

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoSearchBarActions}>
        <Logo />
        <SearchInput />
        <HeaderActions />
      </div>
      <Sidebar />
      <Menu />
    </div>
    
  )
}

export default Header