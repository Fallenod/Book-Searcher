import {useState } from "react"
import style from './Header.module.css';
import logo from './logo.png';

function Header({search}) {
    const [searchField, setSearchField] = useState("");
    const handleChange = e => {
        console.log(e.type)
        e.preventDefault()
        search(searchField)
      };
    return ( 
        <header className={style.header}>
            <div className={style.headerItems}>
                <div className={style.logoWrapper}>
                    <img className={style.logoWrapperImg} src={logo} alt="logo" />
                </div>
                <form>
                    <input className={style.book_search} onChange = {e => setSearchField(e.target.value)} type="search" placeholder="Search" id="book-search" name="q" />
                    <button className={style.book_search_button} type="submit" onClick = {handleChange}><ion-icon name="search-outline"></ion-icon></button>
                </form>
            </div>
        </header>
     );
}

export default Header;