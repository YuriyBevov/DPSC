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
    const menu = evt.target.closest('.foodModal__item').querySelector('.foodModal-swiper-container')

    const btn = evt.target.closest('.foodModal__item').querySelector('.js-show-food-menu-btn')
    if(menu.classList.contains('opened')) {
        menu.classList.remove('opened')
        btn.classList.add('closed')
        // console.log(showBtn)
    } else {
        menu.classList.add('opened')
        btn.classList.remove('closed')
        //console.log(showBtn)

        new Swiper(menu, {
                slidesPerView: 'auto',
                spaceBetween: 10,
                
                autoplay: {
                delay: sliderDelay,
            }
        });
    }
}

showBtn.forEach(btn => {
    btn.addEventListener('click', onShowBtnClick)
})