import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './MainLayout';
import SearchPage from './components/SearchPage';
import HomePage from './components/HomePage';
import BookmarksPage from './components/BookmarksPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
