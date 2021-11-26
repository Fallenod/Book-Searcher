import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import style from './BookPage.module.css';
import noImage from './noImage.svg'

function BookPage() {
    const [bookData, setbookData] = useState([]);
    const [isFetched,setIsFetched] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => res.json())
            .then(data => {
                setbookData(data);
                setIsFetched(true);
            })
    }, [id]);
    return ( 
        <div className={style.bookContainer}>
            <div className={style.breadcrumbsWrapper}>
                <Link to="/">
                    <span className={style.breadcrumbs}>Home</span>
                </Link>
                <span>{'>'}</span>
                <span className={style.breadcrumbs}>{isFetched && bookData.volumeInfo.categories}</span>
            </div>
            <div className={style.mainWrapper}>
                <div className={style.imgWrapper}>
                </div>
                <div className={style.textWrapper}>
                    <p className={style.title}>{isFetched && bookData.volumeInfo.title}</p>
                    <div className={style.characteristic}>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default BookPage;