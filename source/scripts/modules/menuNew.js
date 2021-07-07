console.log('menuNew')
const menu = document.querySelector('.menuModal');
const menuOpenBtns = document.querySelectorAll('.js-menu-opener');
const menuCloseBtn = document.querySelector('.js-menuModal-close-btn');

const menuItems = menu.querySelectorAll('.menuModal__link');
const addCompanyModal = document.querySelector('.addCompanyModal')
const addCompanyCloseBtn = addCompanyModal.querySelector('.js-addCompany-modal-close-btn');

const onClickOpenMenu = () => {
    console.log('openmenu')
    menu.classList.add('opened');

    const onMenuItemClickHandler = (evt) => {
        addCompanyModal.classList.add('opened')

        menuItems.forEach(item => {
            console.log('menuItems remove evt')
            item.removeEventListener('click', onMenuItemClickHandler);
        })

        const onClickCloseAddCompanyModal = () => {
            addCompanyModal.classList.remove('opened')

            menuItems.forEach(item => {
                console.log('menuItems add evt')
                item.addEventListener('click', onMenuItemClickHandler);
            })

            addCompanyCloseBtn.removeEventListener('click', onClickCloseAddCompanyModal)
        }

        addCompanyCloseBtn.addEventListener('click', onClickCloseAddCompanyModal)
    }

    menuItems.forEach(item => {
        console.log('menuItems add evt')
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

