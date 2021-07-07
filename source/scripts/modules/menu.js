const openerBtns = document.querySelectorAll('.js-menu-opener');
const menuModal = document.querySelector('.menuModal');
//const addCompanyModal = document.querySelector('.addCompanyModal');
//const addCompanyModalCloseBtn = addCompanyModal.querySelector('.js-addCompany-modal-close-btn');
const menuModalItems = menuModal.querySelectorAll('.menuModal__item');
const menuModalCloseBtn = menuModal.querySelector('.js-menuModal-close-btn');


//addCompanyModal.addEventListener("touchmove", (e) => {

    // is not near edge of view, exit
    //if (e.pageX > 10 && e.pageX < window.innerWidth - 10) return;

    // prevent swipe to navigate back gesture
    //e.preventDefault();    
  //});

window.onhashchange = function() {
        console.log('listener', window.location)
        menuModal.classList.remove('opened')
        menuModalCloseBtn.removeEventListener('click', onClickCloseMenuModal)
        openerBtns.forEach(btn => {
            btn.addEventListener('click', onClickOpenMenu)
        })
}

const onClickCloseMenuModal = () => {
    console.log('close')
    menuModal.classList.remove('opened')
    menuModalCloseBtn.removeEventListener('click', onClickCloseMenuModal)

    openerBtns.forEach(btn => {
        btn.addEventListener('click', onClickOpenMenu)
    })

    /*menuModalItems.forEach(item => {
        item.removeEventListener('click', onMenuItemClickOpenAddCompanyModal)
    })*/
}

const onClickOpenMenu = () => {
    menuModal.classList.add('opened')
    //window.location.isMenuOpened = true
    
    console.log('function',window.location)

    /*const onMenuItemClickOpenAddCompanyModal = () => {
        addCompanyModal.classList.add('opened')

        const onAddCompanyModalCloseBtnClick = () => {
            addCompanyModal.classList.remove('opened')
            addCompanyModalCloseBtn.removeEventListener('click', onAddCompanyModalCloseBtnClick)
        }

        addCompanyModalCloseBtn.addEventListener('click', onAddCompanyModalCloseBtnClick)
    } */

    /*menuModalItems.forEach(item => {
        item.addEventListener('click', onMenuItemClickOpenAddCompanyModal)
    }) */

    openerBtns.forEach(btn => {
        btn.removeEventListener('click', onClickOpenMenu)
    })

    menuModalCloseBtn.addEventListener('click', onClickCloseMenuModal)
}

openerBtns.forEach(btn => {
    btn.addEventListener('click', onClickOpenMenu)
})

// свайпы

/*function swipes(elem) {
    console.log('swipes')
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
        console.log(getTouches(evt)[0])
        yDown = firstTouch.clientY;
    };
    
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }
    
        var xUp = evt.touches[0].clientX;
        console.log(xUp, evt.touches[0])
        var yUp = evt.touches[0].clientY;
        
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/* отлавливаем разницу в движении */
            //if ( xDiff > 0 ) {
            /* swipe влево */
            //} else {
                /* swipe вправо */

            //}
        //} else {
           // if ( yDiff > 0 ) {
            /* swipe вверх */
            //} else {
            /* swipe вниз */
           // }
        //}
        /* свайп был, обнуляем координаты */
        /*xDown = null;
        yDown = null;
    };*/
//}