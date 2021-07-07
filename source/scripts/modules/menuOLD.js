const menu = document.querySelector('.menu');
const menuOpenBtns = document.querySelectorAll('.js-menu-opener');
const menuCloseBtn = document.querySelector('.js-menu-close-btn');
const menuItems = menu.querySelectorAll('.menu__link');
const addCompanyModal = document.querySelector('.addCompanyModal')
const addCompanyCloseBtn = addCompanyModal.querySelector('.js-addCompany-modal-close-btn');
 
const onClickOpenMenu = () => {
    menu.classList.add('opened');

    const onMenuItemClickHandler = (evt) => {
        console.log('open', evt)
        addCompanyModal.classList.add('opened')

        /*addCompanyModal.addEventListener('touchstart', handleTouchStart, false);
        addCompanyModal.addEventListener('touchmove', handleTouchMove, false);
        var xDown = null;
        var yDown = null;
        
        function getTouches(evt) {
            return evt.touches
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
            
            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                    
                } else {
                
                    console.log('swipe right', xDiff)

                    addCompanyModal.removeEventListener('touchstart', handleTouchStart, false);
                    addCompanyModal.removeEventListener('touchmove', handleTouchMove, false);
                }
            } else {

                if ( yDiff > 0 ) {
                    
                } else {
                    
                     }
                } 
                
                xDown = null;
                yDown = null;
        };*/

        menuItems.forEach(item => {
            item.removeEventListener('click', onMenuItemClickHandler);
        })

        const onClickCloseAddCompanyModal = () => {
            console.log('close')
            addCompanyModal.classList.remove('opened')
            menuItems.forEach(item => {
                item.addEventListener('click', onMenuItemClickHandler);
            })

            addCompanyCloseBtn.removeEventListener('click', onClickCloseAddCompanyModal);
            //addCompanyModal.removeEventListener('touchstart', handleTouchStart, false);
            //addCompanyModal.removeEventListener('touchmove', handleTouchMove, false);
        }

        addCompanyCloseBtn.addEventListener('click', onClickCloseAddCompanyModal)
    }

    const onClickCloseMenu = () => {
        menu.classList.remove('opened');
    
        menuOpenBtns.forEach(btn => {
            btn.addEventListener('click', onClickOpenMenu);
        });
    
        menuItems.forEach(item => {
            console.log('close')
            item.removeEventListener('click', onMenuItemClickHandler);
        })
    }

    menuItems.forEach(item => {
        item.addEventListener('click', onMenuItemClickHandler);
    })

    menuOpenBtns.forEach(btn => {
        btn.removeEventListener('click', onClickOpenMenu);
    });

    menuCloseBtn.addEventListener('click', onClickCloseMenu);
}

menuOpenBtns.forEach(btn => {
    btn.addEventListener('click', onClickOpenMenu);
}); 

