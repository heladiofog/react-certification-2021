import React from 'react';
import {
  SearchBoxContainer,
  SearchInput,
  SearchIcon,
} from './SearchBox.styled.component';

function SearchBox() {
  return (
    <SearchBoxContainer>
      {/* Search Icon */}
      <SearchIcon />
      <SearchInput placeholder="Search..." />
    </SearchBoxContainer>
  );
}

export default SearchBox;
