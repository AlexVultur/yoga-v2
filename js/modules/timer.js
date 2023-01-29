'use strict';

//function timer() {
/*
    функціонал для таймера
    */

function timer(hour, minutes, seconds) {
    let setTime = hour * 3600 + minutes * 60 + seconds,
        timer = setInterval(timerBack, 1000);

    /*
    Варіант 1
    */

    // function timerBack() {
    //     setTime = setTime - 1;

    //     if (setTime < 0) {
    //         clearInterval(timer);
    //     } else {
    //         hour = Math.floor(setTime / 3600);
    //         minutes = Math.floor((setTime - hour * 3600) / 60);
    //         seconds = setTime - hour * 3600 - minutes * 60;
    //         document.querySelector('#timer .hours').textContent = ("0" + hour).slice(-2);
    //         document.querySelector('#timer .minutes').textContent = ("0" + minutes).slice(-2);
    //         document.querySelector('#timer .seconds').textContent = ("0" + seconds).slice(-2);
    //     }
    // }

    /*
    Варіант 2
    */

    let dateStart = new Date(),
        dateFinal = dateStart.setTime(dateStart.getTime() + setTime * 1000);

    function timerBack() {
        let now = new Date().getTime(),
            diff = dateFinal - now;

        if (diff <= 0) {
            clearInterval(timer);
        } else {
            hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((diff % (1000 * 60)) / 1000);
            document.querySelector('#timer .hours').textContent = ("0" + hour).slice(-2);
            document.querySelector('#timer .minutes').textContent = ("0" + minutes).slice(-2);
            document.querySelector('#timer .seconds').textContent = ("0" + seconds).slice(-2);
            localStorage.setItem('hour', ("0" + hour).slice(-2));
            localStorage.setItem('minutes', ("0" + minutes).slice(-2));
            localStorage.setItem('seconds', ("0" + seconds).slice(-2));
        }
    }
}
export default timer;