import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import style from './Hero.module.css';

import banner1 from '/src/assets/images/banner-01.jpg';
import banner2 from '/src/assets/images/banner-02.jpg';
import banner3 from '/src/assets/images/banner-03.jpg';

const banners = [banner1, banner2, banner3];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    return (
        <div className={style.hero}>

        <div className={`${style.hero_slider} container`}>
           <span className={style.arrow}> <FontAwesomeIcon 
                icon={faChevronLeft} 
                onClick={handlePrev} 
                className={style.arrow_Left}
            /></span>
                    <div className={style.hero_pargh}>
        <p>Toronto,<span>Canada</span></p>
            <h2>HURRY! GET THE BEST VILLA FOR YOU</h2>
        </div>

            <span className={style.arrow}><FontAwesomeIcon 
                icon={faChevronRight} 
                onClick={handleNext} 
                className={style.arrow_Right}
            /></span> 
            </div>
            <img src={banners[currentIndex]} alt="Banner" />
            <div className={style.btns}>
                {banners.map((banner, index) => (
                    <span
                        key={index}
                        className={`${style.btn} ${currentIndex === index ? style.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Hero;
