import {useState, useContext } from "react";
import {Link} from 'react-router-dom';
import Context from "../../context";
import style from './Header.module.css';
import logo from './logo.png';

function Header() {
    const [searchField, setSearchField] = useState("");
    const [value, setValue] = useContext(Context)
    const handleChange = e => {
        console.log(e.type)
        e.preventDefault()
        setValue(searchField)
      };
    return ( 
        <header className={style.header}>
            <div className={style.headerItems}>
                <Link to="/">
                    <div className={style.logoWrapper}>
                        <img className={style.logoWrapperImg} src={logo} alt="logo" />
                        <span className={style.logoText}>ReadTown</span>
                    </div>
                </Link>
                <form>
                    <input className={style.book_search} onChange = {e => setSearchField(e.target.value)} type="search" placeholder="Search" id="book-search" name="q" />
                    <button className={style.book_search_button} type="submit" onClick = {handleChange}><ion-icon name="search-outline"></ion-icon></button>
                </form>
            </div>
        </header>
     );
}

export default Header;