import { useEffect, useState } from "react"
import Header from './Header';
import Main from './Main';
import './App.css';
import LoadMoreButton from './LoadMoreButton';
import { getData } from "./getData";


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
      <Main items={items}/>
      <LoadMoreButton loadMore={loadMore} items={items} />
    </div>
  );
}

export default App;
