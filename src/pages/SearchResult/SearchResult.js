import style from './SearchResult.module.css';
import BookCard from '../../components/BookCard/BookCard';

function SearchResult({items}) {
    
    return ( 
        <div className={style.main}>
            <BookCard items={items}/>
        </div>
     );
}

export default SearchResult;