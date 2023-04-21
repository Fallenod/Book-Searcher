import React from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Toolbar from '@mui/material/Toolbar';

import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import BurgerMenu from './BurgerMenu';
import { selectBookmark } from '../features/bookmark/bookmarkSlice';
import LoginBar from './LoginBar';
import SearchField from './SearchField';
import BadgeWrapper from './BadgeWrapper';
import AppBarBtn from './AppBarBtn';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@mui/material';
import subjectList from '../subjectList';
import { Link } from 'react-router-dom';

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: .2rem;
`;
const Item = styled(Link)(({ theme }) => `
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: .4rem;
  padding:  .5rem .8rem;
  width: 100px;
  cursor: pointer;
  &:hover{
    color: ${theme.palette.primary.main};
  }
`);
const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background-color: white;
  overscroll-behavior-x: contain;
  overflow-x: auto;
`;
const Text = styled(Typography)`
  font-weight: 700;
`;
function Header() {
  const countBookmarks = useSelector(selectBookmark);

  return (
    <AppBar sx={{ backgroundColor: "white" }} position="static" elevation={0}>
      <Container sx={{ flexDirection: "column" }} maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: "space-between" }}>
          <Logo />
          {/* <BurgerMenu /> */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            <SearchField />
          </Box>
          <ButtonGroup>
            <AppBarBtn text="Корзина" ico={<BadgeWrapper badgeContent={countBookmarks} color="warning" ico={<FontAwesomeIcon size="xl" icon={faCartShopping} />} />} />
            <AppBarBtn text="Избранное" ico={<BadgeWrapper badgeContent={countBookmarks} color="error" ico={<FontAwesomeIcon size="xl" icon={faHeart} />} />} />
            <LoginBar />
          </ButtonGroup>
        </Toolbar>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <SearchField />
        </Box>
        <Bar>
          {subjectList && subjectList.map((item) => (
            <Item to={item.url} key={item.id} >{item.icon}<Text>{item.name}</Text></Item>
          ))}
        </Bar>

      </Container>
    </AppBar>
  );
}

export default Header;
