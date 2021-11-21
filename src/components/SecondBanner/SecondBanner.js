import { Carousel } from 'react-responsive-carousel';
import carouselBannerImg1 from './carouselBannerImg1.webp';
import carouselBannerImg2 from './carouselBannerImg2.jpg';
import carouselBannerImg3 from './carouselBannerImg3.jpeg';
import carouselBannerImg4 from './carouselBannerImg4.jpeg';
import carouselBannerImg5 from './carouselBannerImg5.jpeg';
import style from './SecondBanner.module.css';

function SecondBanner() {
    return ( 
        <Carousel className={style.carousel} autoPlay infiniteLoop showThumbs={false}>
                <div className={style.carouselBanner}>
                    <img src={carouselBannerImg1} href='#' alt="" />
                </div>
                <div className={style.carouselBanner}>
                    <img src={carouselBannerImg2} href='#' alt="" />
                </div>
                <div className={style.carouselBanner}>
                    <img src={carouselBannerImg3} href='#' alt="" />
                </div>
                <div className={style.carouselBanner}>
                    <img src={carouselBannerImg4} href='#' alt="" />
                </div>
                <div className={style.carouselBanner}>
                    <img src={carouselBannerImg5} href='#' alt="" />
                </div>
        </Carousel>
     );
}

export default SecondBanner;