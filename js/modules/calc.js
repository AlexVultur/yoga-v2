'use strict';

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
export default calc();