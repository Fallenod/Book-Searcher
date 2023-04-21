import React, { useState, useEffect } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton, styled } from '@mui/material';

const ArrowButton = styled(IconButton)(({ theme }) => `
  position: fixed;
  bottom: 40px;
  right: 25px;
  height: 50px;
  width: 50px;
  color: ${theme.palette.common.white};
  background-color: ${theme.palette.text.primary};
  cursor: pointer;
  z-index: 20;
  &:hover {
    color: ${theme.palette.common.white};
    background-color: ${theme.palette.text.primary};
  }
`);

function ScrollToTopButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {' '}
      {showTopBtn && (
        <ArrowButton onClick={goToTop}>
          <ArrowUpwardIcon />
        </ArrowButton>
      )}
      {' '}
    </>
  );
}
export default ScrollToTopButton;
