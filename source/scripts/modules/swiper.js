import Swiper from 'swiper'

const sliderDelay = 3000;

let slider = document.querySelector('.situations-swiper-container');

if(slider) {
    new Swiper('.situations-swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
    
        autoplay: {
          delay: sliderDelay,
        }
    });
}