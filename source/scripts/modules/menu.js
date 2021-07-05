const menu = document.querySelector('.menu');
const menuOpenBtns = document.querySelectorAll('.js-menu-opener');
const menuCloseBtn = document.querySelector('.js-menu-close-btn');
// const body = document.querySelector('html')

const onClickOpenMenu = () => {
    menu.classList.add('opened');

    menuOpenBtns.forEach(btn => {
        btn.removeEventListener('click', onClickOpenMenu);
    });

    // body.style.overflowY = 'hidden'
}

const onClickCloseMenu = () => {
    menu.classList.remove('opened');

    menuOpenBtns.forEach(btn => {
        btn.addEventListener('click', onClickOpenMenu);
    });

    // body.style.overflowY = 'scroll'
}

menuOpenBtns.forEach(btn => {
    btn.addEventListener('click', onClickOpenMenu);
});

menuCloseBtn.addEventListener('click', onClickCloseMenu);