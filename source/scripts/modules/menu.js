const menu = document.querySelector('.menu');
const menuOpenBtns = document.querySelectorAll('.js-menu-opener');
const menuCloseBtn = document.querySelector('.js-menu-close-btn');

const onClickOpenMenu = () => {
    menu.classList.add('opened');

    menuOpenBtns.forEach(btn => {
        btn.removeEventListener('click', onClickOpenMenu);
    });
}

const onClickCloseMenu = () => {
    menu.classList.remove('opened');

    menuOpenBtns.forEach(btn => {
        btn.addEventListener('click', onClickOpenMenu);
    });
}

menuOpenBtns.forEach(btn => {
    btn.addEventListener('click', onClickOpenMenu);
});

menuCloseBtn.addEventListener('click', onClickCloseMenu);