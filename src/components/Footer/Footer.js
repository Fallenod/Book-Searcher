import style from './Footer.module.css';

function Footer() {
    return ( 
        <div className={style.footer}>
            <ul className={style.socialIcons}>
                <li className={style.iconsItem}>
                    <a className={style.iconsLink} href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li className={style.iconsItem}>
                    <a className={style.iconsLink} href="#">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>
            </ul>
            <p>&copy;2021 BoorSearcher | All Rights Reserved</p>
        </div>
     );
}

export default Footer;