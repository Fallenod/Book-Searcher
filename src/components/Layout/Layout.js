import {Outlet} from 'react-router-dom';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

function Layout(searchValue) {
    
    return ( 
        <>
            <Header search={searchValue}/>
            <Outlet/>
            <Footer/>
        </>
     );
}

export default Layout;