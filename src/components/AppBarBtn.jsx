import React from 'react';

import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const BtnContainer = styled(Link)(({ theme }) => `
  all: unset;
  display: flex;
  width: 92px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  padding: 6px;
  color: ${theme.palette.common.black};
  background-color: inherit;
  cursor: pointer;
  user-select: none;
  transition: color .3s ease-in-out;
  &:hover {
    color: ${theme.palette.primary.main};
    background-color: ${theme.palette.secondary.main};
  }
`);
const BtnText = styled(Typography)`
  font-weight: 700;
`;

function AppBarBtn({ text, ico, onClick, to }) {
  return (
    <BtnContainer to={to} onClick={onClick} >
      {ico}
      <BtnText>{text}</BtnText>
    </BtnContainer>
  );
}

export default AppBarBtn;
