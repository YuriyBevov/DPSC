const openerBtns = document.querySelectorAll('.js-menu-opener');
const menuModal = document.querySelector('.menuModal');
const addCompanyModal = document.querySelector('.addCompanyModal');
const addCompanyModalCloseBtn = addCompanyModal.querySelector('.js-addCompany-modal-close-btn');
const menuModalItems = menuModal.querySelectorAll('.menuModal__item');
const menuModalCloseBtn = menuModal.querySelector('.js-menuModal-close-btn');

const onClickCloseMenuModal = () => {
    menuModal.classList.remove('opened')
    menuModalCloseBtn.removeEventListener('click', onClickCloseMenuModal)

    openerBtns.forEach(btn => {
        btn.addEventListener('click', onClickOpenMenu)
    })

    menuModalItems.forEach(item => {
        item.removeEventListener('click', onMenuItemClickOpenAddCompanyModal)
    })
}

const onMenuItemClickOpenAddCompanyModal = () => {
    addCompanyModal.classList.add('opened')

    const onAddCompanyModalCloseBtnClick = () => {
        addCompanyModal.classList.remove('opened')
        addCompanyModalCloseBtn.removeEventListener('click', onAddCompanyModalCloseBtnClick)
    }

    addCompanyModalCloseBtn.addEventListener('click', onAddCompanyModalCloseBtnClick)
}

const onClickOpenMenu = () => {
    menuModal.classList.add('opened')
    
    menuModalItems.forEach(item => {
        item.addEventListener('click', onMenuItemClickOpenAddCompanyModal)
    })

    openerBtns.forEach(btn => {
        btn.removeEventListener('click', onClickOpenMenu)
    })

    menuModalCloseBtn.addEventListener('click', onClickCloseMenuModal)
}

openerBtns.forEach(btn => {
    btn.addEventListener('click', onClickOpenMenu)
})