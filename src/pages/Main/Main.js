
import style from './Main.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carouselBannerImg1 from './carouselBanner1.webp';
import carouselBannerImg2 from './carouselBanner2.jpg';

function Main() {
    const [items, setItems] = useState({});
    useEffect(() => {
        const data = async () => { 
            const url =`https://www.googleapis.com/books/v1/volumes?q=harry&maxResults=5&startIndex=1`
            const res = await fetch(url);
            const result = await res.json()
            if(result.status >= 400) {
                throw Error('Something wrong')
            }
        }
        setItems(data);
        
    }, [])
    console.log(items)
    return ( 
        <div className={style.main}>
            <div className={style.bannerContainer}>
                <h1 className={style.header}>Find what you love.<br/> Search Online with SearchBook.</h1>
                <section className={style.mainBanner}></section>
            </div>
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div className={style.carouselBanner}>
                    <img src={carouselBannerImg1} href='#' alt="" />
                </div>
                <div className={style.carouselBanner}>
                    <img src={carouselBannerImg2} href='#' alt="" />
                </div>
            </Carousel>
            <Carousel>

            </Carousel>

        </div>
     );
}

export default Main;