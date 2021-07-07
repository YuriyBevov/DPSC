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

document.addEventListener('touchstart', handleTouchStart, { passive: false });
document.addEventListener('touchmove', handleTouchMove, { passive: false });
var xDown = null;
var yDown = null;
 
function getTouches(evt) {
    return evt.touches || // чистый API JS
    evt.originalEvent.touches; // jQuery
}
 
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};
 
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
 
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/* отлавливаем разницу в движении */
        if ( xDiff > 0 ) {
        /* swipe влево */
        } else {
            /* swipe вправо */
            console.log('swipe')
            evt.preventDefault();
        }
    } else {
        if ( yDiff > 0 ) {
        /* swipe вверх */
        } else {
        /* swipe вниз */
        }
    }
    /* свайп был, обнуляем координаты */
    xDown = null;
    yDown = null;
};