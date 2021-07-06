const menu = document.querySelector('.menu');
const menuOpenBtns = document.querySelectorAll('.js-menu-opener');
const menuCloseBtn = document.querySelector('.js-menu-close-btn');
const menuItems = menu.querySelectorAll('.menu__link');
const addCompanyModal = document.querySelector('.addCompanyModal')
const addCompanyCloseBtn = addCompanyModal.querySelector('.js-addCompany-modal-close-btn');
 
const onClickOpenMenu = () => {
    menu.classList.add('opened');

    const onMenuItemClickHandler = (evt) => {
        addCompanyModal.classList.add('opened')

        menuItems.forEach(item => {
            item.removeEventListener('click', onMenuItemClickHandler);
        })

        const onClickCloseAddCompanyModal = () => {
            addCompanyModal.classList.remove('opened')
            menuItems.forEach(item => {
                item.addEventListener('click', onMenuItemClickHandler);
            })

            addCompanyCloseBtn.removeEventListener('click', onClickCloseAddCompanyModal)
        }

        addCompanyCloseBtn.addEventListener('click', onClickCloseAddCompanyModal)
    }

    menuItems.forEach(item => {
        item.addEventListener('click', onMenuItemClickHandler);
    })

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