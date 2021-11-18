
import style from './Main.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import BookCard from '../../components/BookCard/BookCard';
import SecondBanner from '../../components/SecondBanner/SecondBanner';
import MainBanner from '../../components/MainBanner/MainBanner';


function Main() {
    const [items, setItems] = useState({});
    const titleCompilation = {
        "Harry Potter book series": "harry+potter+and+inauthor:j.k.rowling",
        "Dune book series": "dune+inauthor:frank+herbert",
        "Dark Tower series": "the+dark+tower+inauthor:king",
    }
    const searchTerm = "harry+potter+and+the+inauthor:rowling"
    const data = async () => { 
        const url =`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=books&maxResults=5&startIndex=1`
        const res = await fetch(url);
        const result = await res.json()
        if(result.status >= 400) {
            throw Error('Something wrong')
        }
        else {
            setItems(result);
        }
    }
    useEffect(() => {
        data();
    }, [])
    
    return ( 
        <div className={style.main}>
            <MainBanner/>
            <SecondBanner/>
            <div className={style.bookCompilation}>
                <a className={style.bookCompilationTitle} href="#">Harry Potter book series</a>
                <div className={style.bookCompilationWrapper}>
                    <BookCard items={items.items}/>
                </div>
            </div>
        </div>
     );
}

export default Main;