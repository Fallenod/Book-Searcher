import { Carousel } from 'react-responsive-carousel';
import carouselBannerImg1 from './carouselBanner1.webp';
import carouselBannerImg2 from './carouselBanner2.jpg';
import style from './SecondBanner.module.css';

function SecondBanner() {
    return ( 
        <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div className={style.carouselBanner}>
                    <img src={carouselBannerImg1} href='#' alt="" />
                </div>
                <div className={style.carouselBanner}>
                    <img src={carouselBannerImg2} href='#' alt="" />
                </div>
        </Carousel>
     );
}

export default SecondBanner;