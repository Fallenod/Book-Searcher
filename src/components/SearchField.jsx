import React, { useState } from 'react';

import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchInput = styled(InputBase)(({ theme }) => `
  border-radius: .5rem;
  background-color: transparent;
  color: ${theme.palette.text.secondary};
  padding: .6rem 1rem;
  border: 2px solid ${theme.palette.primary.main};
`);
const BoxInput = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  min-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
`;
const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
const SearchButton = styled(Button)(({ theme }) => `
  position: absolute;
  width: 80px;
  height: 100%;
  border-radius: 0 .5rem .5rem 0;
  top: 50%;
  transform: translate(50%, -50%);
  right: 2rem;
  background-color: ${theme.palette.primary.main};
  &:hover {
    background-color: ${theme.palette.primary.main};
  }
`);

function SearchField() {
  const [searchUrl, setSearchUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = searchUrl.replace(" ", "+");
    navigate(`/search?q=${result}`);
  };
  const onChangeInput = (e) => {
    const result = e.target.value;
    setSearchUrl(result);
  };
  return (
    <BoxInput
      onSubmit={(e) => handleSubmit(e)}
      role="presentation"
      component="form"
    >
      <SearchInputContainer>
        <SearchInput
          id="search-bar"
          fullWidth
          value={searchUrl}
          placeholder='Искать книги'
          type="text"
          onChange={onChangeInput}
        />
        <SearchButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: 'white' }} />
        </SearchButton>
      </SearchInputContainer>
    </BoxInput>
  );
}
SearchField.defaultProps = {
  handleSubmit: () => { },
  searchUrl: "",
  setSearchUrl: () => { },
}
SearchField.propTypes = {
  handleSubmit: PropTypes.func,
  searchUrl: PropTypes.string,
  setSearchUrl: PropTypes.func,
};
export default SearchField;
