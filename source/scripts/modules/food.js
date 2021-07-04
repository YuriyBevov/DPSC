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

    let fSlider = document.querySelectorAll('.foodModal-swiper-container');

    if(fSlider) {
      fSlider.forEach(el => {
        new Swiper('.foodModal-swiper-container', {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    
                    autoplay: {
                    delay: sliderDelay,
                }
            });
        })
    }
}

const onClickCloseFoodModal = () => {
    foodModal.classList.remove('opened');
    foodModalOpenBtn.addEventListener('click', onClickOpenFoodModal);
    body.style.overflowY = 'scroll'
}

foodModalOpenBtn.addEventListener('click', onClickOpenFoodModal);

foodModalCloseBtn.addEventListener('click', onClickCloseFoodModal);

const showBtn = document.querySelectorAll('.js-show-food-menu-btn')

const onShowBtnClick = (evt) => {
    const item = evt.target.closest('.foodModal__item')

    const menu = item.querySelector('.foodModal-swiper-container')

    if(menu.classList.contains('visually-hidden')) {
        menu.classList.remove('visually-hidden')
    } else {
        menu.classList.add('visually-hidden')
    }
}

showBtn.forEach(btn => {
    btn.addEventListener('click', onShowBtnClick)
})