import { useEffect, useState, useContext } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Main from './pages/Main/Main';
import SearchResult from './pages/SearchResult/SearchResult';
import './App.css';
import { getData } from "./api/getData";
import Layout from "./components/Layout/Layout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import BookPage from "./pages/BookPage/BookPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Context from "./context";


function App() {
  const [items, setItems] = useState({});
  const [value, setValue] = useState('');
  const [index, setIndex] = useState(1);
  const MAX = 20;
  const fetchData = async () => {
    const data = await getData(value, index, MAX)
    setItems(data)
    setItems(items =>  data );
    setIndex(index)
  }
  useEffect(() => {
      fetchData()
  }, [value, index])
  const getIndex = (index) => {
    if (index == 1) {
      setIndex(1)
  }
    setIndex((index -1) * (MAX + 1))
  }
  return (
    <Context.Provider value={[value, setValue]}>
      <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Main/>}/>
            <Route path="/search" element={<SearchResult items={items.items} total={items.totalItems} getIndex={getIndex} max={MAX}/>}/>
            <Route path="/book/:id" element={<BookPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>  
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
