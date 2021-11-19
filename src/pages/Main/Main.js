
import style from './Main.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState, useRef } from "react";
import BookCard from '../../components/BookCard/BookCard';
import SecondBanner from '../../components/SecondBanner/SecondBanner';
import MainBanner from '../../components/MainBanner/MainBanner';


function Main() {
    const [items, setItems] = useState({});
    let dataObject = [{
                title: "Harry Potter book series",
                term: "harry+potter+and+inauthor:j.k.rowling",
                data: 'not update' 
               },
               {
                title: "Dune book series",
                term: "dune+inauthor:frank+herbert", 
                data: 'not update'
               },
               {
                title: "Dark Tower series",
                term: "the+dark+tower+inauthor:king",
                data: 'not update'
               }];
    const data = async (term) => { 
        const url =`https://www.googleapis.com/books/v1/volumes?q=${term}&printType=books&maxResults=5&startIndex=1`
        const res = await fetch(url);
        const result = await res.json()
        if(result.status >= 400) {
            throw Error('Something wrong')
        }
        else {
            setItems(result);
            
            return result
        }
    }
    const fetchAllData = async () => {
        dataObject.map(async (el) =>
        el.data = await data(el.term)
        )
    }
    useEffect(() => {
        fetchAllData();
        console.log(items)
    }, [])
    // useEffect(() => {
    //     console.log(dataObject)
        
    // }, [dataObject])
    
    return ( 
        <div className={style.main}>
            <MainBanner/>
            <SecondBanner/>
            {
                 dataObject.map((el) => 
                    <div className={style.bookCompilation}>
                        <a className={style.bookCompilationTitle} href="#">{el.data}</a>
                        <div className={style.bookCompilationWrapper}>
                            <BookCard items={items.items}/>
                        </div>
                    </div>
                )  
            }
        </div>
     );
}

export default Main;