const openerBtns = document.querySelectorAll('.js-menu-opener');
const menuModal = document.querySelector('.menuModal');
const addCompanyModal = document.querySelector('.addCompanyModal');
const addCompanyModalCloseBtn = addCompanyModal.querySelector('.js-addCompany-modal-close-btn');
const menuModalItems = menuModal.querySelectorAll('.menuModal__item');
const menuModalCloseBtn = menuModal.querySelector('.js-menuModal-close-btn');

const onClickOpenMenu = () => { 
    menuModal.classList.add('opened')

    const onMenuItemClickOpenAddCompanyModal = () => {
        console.log('addc')
        addCompanyModal.classList.add('opened')


        /* menuModalItems.forEach(item => {
            
            item.removeEventListener('click', onMenuItemClickOpenAddCompanyModal)
        }) */

        const onAddCompanyModalCloseBtnClick = () => {
            console.log('onAddCompanyModalCloseBtnClick')
            addCompanyModal.classList.remove('opened')
            addCompanyModalCloseBtn.removeEventListener('click', onAddCompanyModalCloseBtnClick)

            /* menuModalItems.forEach(item => {
                console.log('menuModalItems remove event')
                item.addEventListener('click', onMenuItemClickOpenAddCompanyModal)
            }) */
        }

        addCompanyModalCloseBtn.addEventListener('click', onAddCompanyModalCloseBtnClick)
    }

    menuModalItems.forEach(item => {
        console.log('menuModalItems add event')
        item.addEventListener('click', onMenuItemClickOpenAddCompanyModal)
    })

    openerBtns.forEach(btn => {
        console.log('openerBtns remove event')
        btn.removeEventListener('click', onClickOpenMenu)
    })

    

    const onClickCloseMenuModal = () => {
        console.log('onClickCloseMenuModal')
        menuModal.classList.remove('opened')
        menuModalCloseBtn.removeEventListener('click', onClickCloseMenuModal)

        openerBtns.forEach(btn => {
            btn.addEventListener('click', onClickOpenMenu)
        })

        menuModalItems.forEach(item => {
            console.log('menuModalItems remove event')
            item.removeEventListener('click', onMenuItemClickOpenAddCompanyModal)
        })
    }

    menuModalCloseBtn.addEventListener('click', onClickCloseMenuModal)
}

openerBtns.forEach(btn => {
    console.log('openerBtns add event', btn)
    btn.addEventListener('click', onClickOpenMenu)
})