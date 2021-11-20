import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Main from './pages/Main/Main';
import SearchResult from './pages/SearchResult/SearchResult';
import './App.css';
import LoadMoreButton from './components/LoadMoreButton';
import { getData } from "./api/getData";
import Layout from "./components/Layout/Layout";


function App() {
  const [items, setItems] = useState({});
  const [value, setValue] = useState('');
  const [index, setIndex] = useState(1);
  const fetchData = async () => {
    const data = await getData(value, index)
    setItems(data)
    setItems(items ? {...items, ...data} : data);
        setIndex(index + 1)
  }
  useEffect(() => {
      fetchData()
  }, [value])
  const searchValue = (value) => {
    setValue(value)
  }
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route path="/" element={<Layout searchValue={searchValue} />}>
          <Route index path="/" element={<Main/>}/>
          <Route path="/search" element={<SearchResult items={items.items}/>}/>
          {/* <Route path="*" element={}/> */}
        </Route>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
