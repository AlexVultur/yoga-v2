'use strict';

import timerModule from './modules/timer.js';
import modal from './modules/modal.js';
import tabsModule from './modules/tabs.js';
import send from './modules/send.js';
import sliderModule from './modules/slider.js';
import calcModule from './modules/calc.js';

window.addEventListener('DOMContentLoaded', () => {
    let hour,
        minutes,
        seconds;

    if (localStorage.getItem('hour') ||
        localStorage.getItem('minutes') ||
        localStorage.getItem('seconds')) {
        hour = +localStorage.getItem('hour');
        minutes = +localStorage.getItem('minutes');
        seconds = +localStorage.getItem('seconds');
        document.querySelector('#timer .hours').textContent = ("0" + hour).slice(-2);
        document.querySelector('#timer .minutes').textContent = ("0" + minutes).slice(-2);
        document.querySelector('#timer .seconds').textContent = ("0" + seconds).slice(-2);
    } else {
        hour = +document.querySelector('#timer .hours').textContent;
        minutes = +document.querySelector('#timer .minutes').textContent;
        seconds = +document.querySelector('#timer .seconds').textContent;
    }
    
    timerModule(hour, minutes, seconds);
    modal();
    tabsModule();
    send();
    sliderModule();
    calcModule();
});