import {Link} from 'react-router-dom';
import style from './BookCard.module.css';
import Loader from '../../components/Loader/Loader';
import noImage from './noImage.svg'
import { Fragment } from 'react';

function BookCard(items) {
    return ( 
        <Fragment>
        {
            items.items ? items.items.map(({id, volumeInfo, saleInfo }) => (
                <div className={style.mainItem}>
                    <Link key={id} to={`/book/${id}`}>
                        <div className={style.imageWrapper}>
                            <img  src={
                                volumeInfo.imageLinks === undefined
                                    ? `${noImage}`
                                    : `${volumeInfo.imageLinks.thumbnail}`
                            } alt="" loading="lazy" />
                        </div>
                        <p className={style.textTitle}>{volumeInfo.title}</p>
                    </Link>
                    <p className={style.textAuthors}>{volumeInfo.authors}</p>
                    <p className={style.textAuthors}>{
                        saleInfo.saleability === 'NOT_FOR_SALE'
                            ? `not for sale` : `${saleInfo.listPrice.amount}`
                        }
                    </p>
                </div>
            )) : <Loader/>
        }
        </Fragment>
     );
}

export default BookCard;