import { Carousel } from 'react-responsive-carousel';
import mainBannerImage1 from './mainBannerImage.webp';
import mainBannerImage2 from './mainBannerImage2.webp';
import style from './MainBanner.module.css';

function MainBanner() {
    return ( 
        <div className={style.wrapper}>
            <div className={style.bannerContainer}>
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div >
                    <img src={mainBannerImage1} href='#' alt="" />
                </div>
                <div >
                    <img src={mainBannerImage2} href='#' alt="" />
                </div>
        </Carousel>
            </div>
        </div>
     );
}

export default MainBanner;