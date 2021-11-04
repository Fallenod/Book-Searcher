import {useState } from "react"
import style from './Header.module.css';

function Header({search}) {
    const [searchField, setSearchField] = useState("");
    const handleChange = e => {
        console.log(e.type)
        e.preventDefault()
        search(searchField)
      };
     console.log(searchField)
    return ( 
        <header className={style.header}>
            <form>
                <input className={style.book_search} onChange = {e => setSearchField(e.target.value)} type="search" placeholder="Введите название книги" id="book-search" name="q" />
                <input className={style.book_search_button} value="Искать" type="submit" onClick = {handleChange}/>
            </form>
        </header>
     );
}

export default Header;