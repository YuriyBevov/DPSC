import Swiper from 'swiper'

const sliderDelay = 3000;

let sSlider = document.querySelector('.situations-swiper-container');

if(sSlider) {
    new Swiper('.situations-swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
    
        autoplay: {
          delay: sliderDelay,
        }
    });
}