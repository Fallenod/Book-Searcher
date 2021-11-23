
import style from './Main.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState, useRef, usecontext } from "react";
import BookCard from '../../components/BookCard/BookCard';
import SecondBanner from '../../components/SecondBanner/SecondBanner';
import MainBanner from '../../components/MainBanner/MainBanner';


function Main() {
    const [items, setItems] = useState({});
    const [items1, setItems1] = useState({});
    const [items2, setItems2] = useState({});
    const [items3, setItems3] = useState({});
    const [items4, setItems4] = useState({});
    const [items5, setItems5] = useState({});
    const [isFetched,setIsFetched] = useState(false);
    let dataObject = [{
                title: "Harry Potter book series",
                term: "harry+potter+and+inauthor:j.k.rowling",
               },
               {
                title: "Dune book series",
                term: "dune+inauthor:frank+herbert", 
               },
               {
                title: "Dark Tower series",
                term: "the+dark+tower+inauthor:king",
               },
               {
                title: "Witcher universe",
                term: "witcher+inauthor:sapkowski",
               },
               {
                title: "The Foundation series",
                term: "foundation+inauthor:asimov",
               },
               {
                title: "A Song of Ice and Fire series",
                term: "ice+fire+inauthor:martin",
               }
               ];
   
    useEffect(() => {
         fetch(`https://www.googleapis.com/books/v1/volumes?q=${dataObject[0].term}&printType=books&maxResults=4&startIndex=1`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setIsFetched(true);
        })
    }, []);
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${dataObject[1].term}&printType=books&maxResults=4&startIndex=2`)
           .then(res => res.json())
           .then(data => {
               setItems1(data);
               setIsFetched(true);
       })
   }, []);
   useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${dataObject[2].term}&printType=books&maxResults=4&startIndex=2`)
            .then(res => res.json())
            .then(data => {
                setItems2(data);
                setIsFetched(true);
        })
    }, []);
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${dataObject[3].term}&printType=books&maxResults=4&startIndex=2`)
            .then(res => res.json())
            .then(data => {
                setItems3(data);
                setIsFetched(true);
        })
    }, []);
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${dataObject[4].term}&printType=books&maxResults=4&startIndex=1`)
            .then(res => res.json())
            .then(data => {
                setItems4(data);
                setIsFetched(true);
        })
    }, []);
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${dataObject[5].term}&printType=books&maxResults=4&startIndex=1`)
            .then(res => res.json())
            .then(data => {
                setItems5(data);
                setIsFetched(true);
        })
    }, []);
    return ( 
        <div className={style.main}>
            <MainBanner/>
            <SecondBanner/>
                    <div className={style.bookCompilation}>
                        <a className={style.bookCompilationTitle} href="#">{dataObject[1].title}</a>
                        <div className={style.bookCompilationWrapper}>
                            <BookCard items={items.items}/>
                        </div>
                    </div>
                    <div className={style.bookCompilation}>
                        <a className={style.bookCompilationTitle} href="#">{dataObject[1].title}</a>
                        <div className={style.bookCompilationWrapper}>
                            <BookCard items={items1.items}/>
                        </div>
                    </div>
                    <div className={style.bookCompilation}>
                        <a className={style.bookCompilationTitle} href="#">{dataObject[2].title}</a>
                        <div className={style.bookCompilationWrapper}>
                            <BookCard items={items2.items}/>
                        </div>
                    </div>
                    <div className={style.bookCompilation}>
                        <a className={style.bookCompilationTitle} href="#">{dataObject[3].title}</a>
                        <div className={style.bookCompilationWrapper}>
                            <BookCard items={items3.items}/>
                        </div>
                    </div>
                    <div className={style.bookCompilation}>
                        <a className={style.bookCompilationTitle} href="#">{dataObject[4].title}</a>
                        <div className={style.bookCompilationWrapper}>
                            <BookCard items={items4.items}/>
                        </div>
                    </div>
                    <div className={style.bookCompilation}>
                        <a className={style.bookCompilationTitle} href="#">{dataObject[5].title}</a>
                        <div className={style.bookCompilationWrapper}>
                            <BookCard items={items5.items}/>
                        </div>
                    </div>
        </div> 
     );
}

export default Main;