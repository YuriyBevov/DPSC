'use strict'

import swiper from './modules/swiper.js'
import accident from './modules/accident.js'
import menu from './modules/menu.js'
import food from './modules/food.js'
import wash from './modules/wash.js'

document.addEventListener('touchmove', function (evt) {
    if (evt.scale !== 1) { evt.preventDefault(); }
}, { passive: false });