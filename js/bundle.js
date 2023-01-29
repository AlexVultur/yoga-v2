/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function calc() {
    let total = document.getElementById('total'),
        numPeople = 0,
        days = 0,
        oneDay = 5000,
        indexPrice = document.getElementById('select').options[0].value;

    total.innerText = 0;

    document.querySelector('#price').addEventListener('input', function () {
        numPeople = document.querySelectorAll('.counter-block-input')[0].value;
        days = document.querySelectorAll('.counter-block-input')[1].value;
        calculate();
    });

    document.getElementById('select').addEventListener("change", function (e) {
        indexPrice = e.target.value;
        calculate();
    });

    function calculate() {
        if (numPeople != 0 && days != 0) {
            total.innerText = oneDay * numPeople * days * indexPrice;
        } else {
            total.innerText = 0;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc());

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


// 3. функція виклику модального вікна. 
function modal() {
    let popupBut = document.querySelector('button[class = more]'),
        popupModal = document.querySelector('.overlay'),
        popupClose = document.querySelector('.overlay .popup-close'),
        bodyStyle = document.querySelector('body'),
        headerStyle = document.querySelector('header'),
        scrollPosition,
        scrollW;

    popupBut.addEventListener('click', function () {
        popupBut.classList.add('more-splash');
        popupModal.style.display = "block";
        scrollPosition = window.pageYOffset;
        scrollW = window.innerWidth - bodyStyle.clientWidth;

        bodyStyle.style.cssText = `overflow: hidden; 
    top: ${-scrollPosition + "px"};
    margin-right: ${scrollW + "px"}`;
        headerStyle.style.cssText = `width: ${bodyStyle.clientWidth + 'px'};
    margin-right: ${scrollW + "px"}`;

        // window.addEventListener('scroll', scrollBody);
    });

    popupClose.addEventListener('click', function () {
        popupBut.classList.remove('more-splash');
        popupModal.style.display = "";
        bodyStyle.style.cssText = `overflow: ; 
    top: };
    margin-right: }`;
        headerStyle.style.cssText = `width: ;
    margin-right: `;

        //  window.removeEventListener('scroll', scrollBody);
    });

    // function scrollBody() {
    //      window.scroll(0, scrollPosition);
    // }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./js/modules/send.js":
/*!****************************!*\
  !*** ./js/modules/send.js ***!
  \****************************/
/***/ (() => {




    let tel = document.querySelectorAll('input[type=tel]'),
        email = document.querySelector('input[type=email]'),
        butContact = document.querySelector('button[type=submit]'),
        butPopup = document.querySelector('.popup-form__btn'),
        formElem,
        divForm = document.createElement('div');

    divForm.style.color = '#c78030';

    butContact.addEventListener('click', (e) => {
        e.preventDefault();
        email.setAttribute('name', 'contactEmeil');
        formElem = document.querySelector('#form');
        if (tel[0].value != '' && email.value != '') {
            send(formElem, tel[0].value);
            tel[0].value = '';
            email.value = '';
        }

        console.log("4324234234");
    });

    butPopup.addEventListener('click', () => {
        formElem = document.querySelector('.main-form');
        if (tel[1].value != '') {
            send(formElem, tel[1].value);
            tel[1].value = '';
        }
    });

    function send(formElement, telVal) {
        let formData = new FormData(formElement),
            request = new XMLHttpRequest();

        formData.set('phone', telVal);
        request.open("POST", "server.php");
        request.send(formData);

        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status === 200) {
                divForm.innerHTML = '</br><p>"Дякуємо! Скоро ми з вами звяжемося!"</p>';
                formElement.append(divForm);
                console.log("Дякуємо! Скоро ми з вами звяжемося!");
            } else {
                divForm.innerHTML = '</br><p>"Завантаження!"</p>';
                formElement.append(divForm);
                console.log("Завантаження");
            }
        });
    }

    // function send(formElement, telVal) {
    //     let formData = new FormData(formElement);

    //     formData.set('phone', telVal);

    //     let promise = new Promise(function (resolve, reject) {
    //         return fetch('server.php', {
    //             method: 'POST',
    //             body: formData
    //         }).then(() => {
    //             divForm.innerHTML = '</br><p>"Завантаження!"</p>';
    //             formElement.append(divForm);
    //             console.log("Завантаження");
    //             setTimeout(() => {
    //                 resolve();
    //             }, 2000);

    //         });
    //     });

    //     promise.then(() => {
    //         divForm.innerHTML = '</br><p>"Дякуємо! Скоро ми з вами звяжемося!"</p>';
    //         formElement.append(divForm);
    //         console.log("Дякуємо! Скоро ми з вами звяжемося!");
    //     }).catch(() => {
    //         divForm.innerHTML = '</br><p>"Виникла помилка!"</p>';
    //         formElement.append(divForm);
    //         console.log("Виникла помилка!");
    //     });

    // }

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function slider() {
    let slideNow = 1,
        slideCount = $('.slider-item').children().length,
        translateWidth = 0,
        navBtnId = 0,
        slideInterval = 2000;

    $('.slider-item').css('display', 'none');
    $('.slider-item').eq(0).css('display', 'block');

    $(document).ready(() => {
        let switchInterval = setInterval(nextSlide, slideInterval);
        $('#photo').hover(() => clearInterval(switchInterval),
            () => switchInterval = setInterval(nextSlide, slideInterval));
    });

    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            slideNow = 1;
        } else {
            slideNow++;
        }

        but();
    }

    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            slideNow = slideCount;
        } else {
            slideNow--;
        }

        but();
    }

    $('.next').on('click', nextSlide);
    $('.prev').on('click', prevSlide);

    $('.dot').click(function () {
        navBtnId = $(this).index();
        if (navBtnId + 1 != slideNow) {
            slideNow = navBtnId + 1;
            but();
        }

    });

    function but() {
        $('.slider-item').css('display', 'none');
        $('.slider-item').eq(slideNow - 1).css('display', 'block');
        $('.dot').removeClass('dot-active');
        $('.dot').eq(slideNow - 1).addClass('dot-active');
    }

    but();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider());

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


    //функціонал табів
function tabs() {
    let tabs = document.querySelectorAll('.info-header-tab'),
        tabsContent = document.querySelectorAll('.info-tabcontent'),
        tabsParent = document.querySelector('.info-header');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ "./js/modules/timer.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ "./js/modules/modal.js");
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs.js */ "./js/modules/tabs.js");
/* harmony import */ var _modules_send_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/send.js */ "./js/modules/send.js");
/* harmony import */ var _modules_send_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_send_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider.js */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc.js */ "./js/modules/calc.js");









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
    
    (0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(hour, minutes, seconds);
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    _modules_send_js__WEBPACK_IMPORTED_MODULE_3___default()();
    (0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map