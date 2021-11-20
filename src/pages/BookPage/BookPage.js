import { useParams } from "react-router-dom";
import style from './BookPage.module.css';

function BookPage() {
    const {id} = useParams();
    return ( 
        <div>
            <span>{id}</span>
        </div>
     );
}

export default BookPage;