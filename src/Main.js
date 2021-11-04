import style from './Main.module.css';
import noImage from './noImage.svg'

function Main({items}) {
    
    return ( 
        <div className={style.main}>
            {
                items.items ? items.items.map(({volumeInfo}) => (
                    <div className={style.main__item}>
                        <p className={style.text_authors}>{volumeInfo.authors}</p>
                        <img  src={
                            volumeInfo.imageLinks === undefined
                                ? `${noImage}`
                                : `${volumeInfo.imageLinks.thumbnail}`
                        } alt="" />
                        <p className={style.text_title}>{volumeInfo.title}</p>
                        
                    </div>
                )) : 'loading'
            }
        </div>
     );
}

export default Main;