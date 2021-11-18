import style from './BookCard.module.css';
import Loader from '../../components/Loader/Loader';
import noImage from './noImage.svg'
import { Fragment } from 'react';

function BookCard(items) {
    return ( 
        <Fragment>
        {
            items.items ? items.items.map(({volumeInfo}) => (
                <div className={style.mainItem}>
                    <div className={style.imageWrapper}>
                        <img  src={
                            volumeInfo.imageLinks === undefined
                                ? `${noImage}`
                                : `${volumeInfo.imageLinks.thumbnail}`
                        } alt="" loading="lazy" />
                    </div>
                    <p className={style.textTitle}>{volumeInfo.title}</p>
                    <p className={style.textAuthors}>{volumeInfo.authors}</p>
                </div>
            )) : <Loader/>
        }
        </Fragment>
     );
}

export default BookCard;