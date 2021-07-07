'use strict'

import swiper from './modules/swiper.js'
import accident from './modules/accident.js'
import menu from './modules/menu.js'
import food from './modules/food.js'
import wash from './modules/wash.js'

// свайпы

document.addEventListener('swiperight', handleSwipeRight, { passive: false });
document.addEventListener('touchstart', handleTouchStart, { passive: false });
document.addEventListener('touchmove', handleTouchMove, { passive: false });
var xDown = null;
var yDown = null;

function handleSwipeRight(evt) {
    console.log('sw evt')
    evt.preventDefault();
}
 
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