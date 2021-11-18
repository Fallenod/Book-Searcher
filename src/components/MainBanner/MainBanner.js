
import style from './MainBanner.module.css';

function MainBanner() {
    return ( 
        <div className={style.bannerContainer}>
                <h1 className={style.header}>Find what you love.<br/> Search Online with SearchBook.</h1>
                <section className={style.mainBanner}></section>
        </div>
     );
}

export default MainBanner;