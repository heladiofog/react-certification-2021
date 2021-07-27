import React from 'react';

import {
  HeaderContainer,
  BurgerMenuContainer,
  BurgerMenu,
  LeftContainer,
} from './Header.styled.component';
import SearchBox from '../SearchBox';
import UserSettings from '../UserSettings';

function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <BurgerMenuContainer>
          <BurgerMenu color="white" />
        </BurgerMenuContainer>
        <SearchBox />
      </LeftContainer>
      <UserSettings />
    </HeaderContainer>
  );
}

export default Header;
