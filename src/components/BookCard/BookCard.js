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
                <div key={id} className={style.mainItem}>
                    <Link key={id} to={`/book/${id}`}>
                        <div className={style.imageWrapper}>
                            <img  src={
                                volumeInfo.imageLinks === undefined
                                    ? `${noImage}`
                                    : `${volumeInfo.imageLinks.thumbnail}`
                            } alt="" loading="lazy" />
                            {((saleInfo.saleability === saleStatus) && (saleInfo.listPrice.amount > saleInfo.retailPrice.amount)) && <div className={style.discount}><span>-{~~((saleInfo.listPrice.amount - saleInfo.retailPrice.amount) / saleInfo.listPrice.amount * 100)}%</span></div>}
                            
                        </div>
                        <div data-tooltip={volumeInfo.title} className={style.textContainer}>
                            <p className={style.textTitle}>{volumeInfo.title}</p>
                            <p className={style.textAuthors}>{volumeInfo.authors}</p>
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
            )) : ''
        }
        </Fragment>
     );
}

export default BookCard;