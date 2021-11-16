import style from './SearchResult.module.css';
import noImage from './noImage.svg'
import Loader from '../../components/Loader/Loader';

function SearchResult({items}) {
    
    return ( 
        <div className={style.main}>
            {
                items.items ? items.items.map(({volumeInfo}) => (
                    <div className={style.main__item}>
                        <div className={style.imageWrapper}>
                            <img  src={
                                volumeInfo.imageLinks === undefined
                                    ? `${noImage}`
                                    : `${volumeInfo.imageLinks.thumbnail}`
                            } alt="" loading="lazy" />
                        </div>
                        <p className={style.text_title}>{volumeInfo.title}</p>
                        <p className={style.text_authors}>{volumeInfo.authors}</p>
                    </div>
                )) : <Loader/>
            }
        </div>
     );
}

export default SearchResult;