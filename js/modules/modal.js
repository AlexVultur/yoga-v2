'use strict';

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

export default modal;