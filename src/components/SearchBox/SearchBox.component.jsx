import React, { useState, useEffect } from 'react';
import {
  SearchBoxContainer,
  SearchInput,
  SearchIcon,
} from './SearchBox.styled.component';

function SearchBox(props) {
  const [searchText, setSearchText] = useState('Wizeline');

  function handleSearchTextChange(event) {
    event.persist();
    setSearchText(event.target.value);
    // This next value should be a stale (old) value
    // console.log('[STALE searchText]:', searchText);
  }

  useEffect(() => {
    // Handling the update of the view
    console.log('[searchText]:', searchText);
  });

  return (
    <SearchBoxContainer minWidth={props.minWidth}>
      <SearchIcon />
      <SearchInput
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </SearchBoxContainer>
  );
}

export default SearchBox;
