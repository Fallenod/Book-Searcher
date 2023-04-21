import React, { useState } from 'react';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import logo from '../content/logo.png';
import SegmentIcon from '@mui/icons-material/Segment';
import { Button, IconButton } from '@mui/material';

const AppBarBtn = styled(Button)(({ theme }) => `
  position: relative;
  display: flex;
  font-weight: 700;
  width: 120px;
  flex: 1 1 100%;
  color: ${theme.palette.common.white};
  background-color: ${theme.palette.primary.main};
  border-radius: 1rem;
  &:hover {
    background-color: ${theme.palette.primary.main};
  }
`);
const AppBarLogo = styled.div(({ theme }) => `
  width: 120px;
  

`);
const AppBarBox = styled(Box)(({ theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  background-color: ${theme.palette.primary.main};
  border-radius: 1rem;
`);
function BurgerMenu() {
  return (
    <AppBarBox>
      <AppBarBtn
        size="large"
        aria-label="search"
        startIcon={<SegmentIcon />}
      >Каталог</AppBarBtn>
    </AppBarBox>
  );
}

export default BurgerMenu;
