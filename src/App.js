import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SearchResult from './pages/SearchResult/SearchResult';
import './App.css';
import LoadMoreButton from './components/LoadMoreButton';
import { getData } from "./api/getData";


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
  const loadMore = () => {
    fetchData()
  }
  useEffect(() => {
      fetchData()
  }, [value])
  const searchValue = (value) => {
    setValue(value)
  }
  return (
    <div className="App">
      <Header search={searchValue}/>
      {/* <SearchResult items={items}/> */}
      <Main/>
      {/* <LoadMoreButton loadMore={loadMore} items={items} /> */}
      <Footer/>
    </div>
  );
}

export default App;
