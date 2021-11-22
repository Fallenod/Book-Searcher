import { useEffect, useState, useContext } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Main from './pages/Main/Main';
import SearchResult from './pages/SearchResult/SearchResult';
import './App.css';
import LoadMoreButton from './components/LoadMoreButton';
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
  // const inputValue = {value, setValue};
  const fetchData = async () => {
    const data = await getData(value, index)
    setItems(data)
    setItems(items ? {...items, ...data} : data);
        setIndex(index + 1)
  }
  useEffect(() => {
      fetchData()
  }, [value])
  // const searchValue = (value) => {
  //   setValue(value)
  // }
  return (
    <Context.Provider value={[value, setValue]}>
      <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Main/>}/>
            <Route path="/search" element={<SearchResult items={items.items}/>}/>
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
