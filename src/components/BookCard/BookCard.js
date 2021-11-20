import {Link} from 'react-router-dom';
import style from './BookCard.module.css';
import Loader from '../../components/Loader/Loader';
import noImage from './noImage.svg'
import { Fragment } from 'react';

function BookCard(items) {
    const saleStatus = "FOR_SALE";
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
                        <div data-tooltip={volumeInfo.title} className={style.textContainer}>
                            <p className={style.textTitle}>{volumeInfo.title}</p>
                            <p className={style.textAuthors}>{volumeInfo.authors.join()}</p>
                        </div>
                        <div className={style.priceContainer}>
                            <span className={(saleInfo.saleability === saleStatus) && (saleInfo.listPrice.amount > saleInfo.retailPrice.amount) ? style.oldPrice : style.actualPrice}>
                                {saleInfo.saleability === saleStatus
                                    ? ` ${~~saleInfo.listPrice.amount} ₽ ` : 'Out of stock'
                                }
                            </span>
                            <span className={style.listPrice}>
                                {(saleInfo.saleability === saleStatus) && (saleInfo.listPrice.amount > saleInfo.retailPrice.amount)
                                    ? `${~~saleInfo.retailPrice.amount} ₽ ` : ''
                                }
                            </span>
                    </div>
                    </Link>
                </div>
            )) : <Loader/>
        }
        </Fragment>
     );
}

export default BookCard;