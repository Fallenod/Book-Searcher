import React, { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';
import style from './SearchResult.module.css';

const BookCard = React.lazy(() => import('../../components/BookCard/BookCard'));

function SearchResult({items, total, getIndex, max}) {
    let amountButtons = Math.round(total / max)
    let arr = [...Array(~~((amountButtons)/2)).keys()].slice(1);
    let paginationButtons = arr.map((el) => {
        return <button className={style.paginationButtons} onClick={e => getIndex(e.target.textContent)}>{el}</button>
    })
    return ( 
        <div className={style.wrapper}>
            <div className={style.main}>
                <Suspense fallback={<Loader/>}>
                    <BookCard items={items}/>
                </Suspense>
                
                {/* <button onClick={e => getIndex(e.target.textContent)}>2</button> */}
                <div className={style.paginationContainer}>{paginationButtons}</div>
                
                
            </div>
        </div>
     );
}

export default SearchResult;