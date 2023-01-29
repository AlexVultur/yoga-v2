'use strict';


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