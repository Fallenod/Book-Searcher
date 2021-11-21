import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './BookPage.module.css';

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
    }, []);
    return ( 
        <div>
            {isFetched && bookData.saleInfo.country}
        </div>
     );
}

export default BookPage;