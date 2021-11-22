import style from './PageNotFound.module.css';
import logo404 from './404.gif';

function PageNotFound() {
    return ( 
        <div className={style.main}>
            <img src={logo404} alt="logo" />
        </div>
     );
}

export default PageNotFound;