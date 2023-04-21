import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import { db } from './firebase';
import { selectUid, selectUserIsAuth } from './features/user/userSlice';
import { selectBookmarkData } from './features/bookmark/bookmarkSlice';
import ScrollToTopButton from './components/ScrollToTopButton';



function MainLayout() {
  const dispatch = useDispatch();
  const uid = useSelector(selectUid);
  const data = useSelector(selectBookmarkData);
  const isAuth = useSelector(selectUserIsAuth);
  useEffect(() => {
    if (isAuth) {
      setDoc(doc(db, 'users', uid), {
        bookmarks: data,
      });
    }
  }, [data]);
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Outlet />
      </Container>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default MainLayout;
