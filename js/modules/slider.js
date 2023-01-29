'use strict';

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

export default slider();