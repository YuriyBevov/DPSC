import Swiper from 'swiper'
const sliderDelay = 3000;
const foodModal = document.querySelector('.foodModal');
const foodModalOpenBtn = document.querySelector('.js-food-modal-opener');
const foodModalCloseBtn = document.querySelector('.js-food-modal-close-btn');
const body = document.querySelector('html')

const onClickOpenFoodModal = () => {
    foodModal.classList.add('opened');
    foodModalOpenBtn.removeEventListener('click', onClickOpenFoodModal);
    body.style.overflowY = 'hidden'

    let fSlider = document.querySelector('.foodModal-swiper-container');

    if(fSlider) {
        new Swiper('.foodModal-swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            
            autoplay: {
            delay: sliderDelay,
            }
        });

        new Swiper('.foodMenu-swiper-container', {
            nested: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
            delay: sliderDelay,
            }
        });
    }
}

const onClickCloseFoodModal = () => {
    foodModal.classList.remove('opened');
    foodModalOpenBtn.addEventListener('click', onClickOpenFoodModal);
    body.style.overflowY = 'scroll'
}

foodModalOpenBtn.addEventListener('click', onClickOpenFoodModal);

foodModalCloseBtn.addEventListener('click', onClickCloseFoodModal);