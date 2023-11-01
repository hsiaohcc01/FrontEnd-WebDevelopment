"use strict";

(function () {

    const nameInputEl = document.querySelector('.register-name_input');
    const nameErrorEl = document.querySelector('.register-name_error');
    const formEl = document.querySelector('.register');
    const confirmGroupEl = document.querySelector('.register-confirm');
    const emailInputEl = document.querySelector('.register-email_input');
    const confirmInputEl = document.querySelector('.register-confirm_input');
    const emailErrorEl = document.querySelector('.register-email_error');

    formEl.addEventListener('submit', (event) => {
        let isInvalid = false
        nameErrorEl.innerText = "";
        emailErrorEl.innerText = "";
        confirmGroupEl.classList.remove('register-confirm--invalid');

        if (!nameInputEl.value) {
            nameErrorEl.innerText = "「 Name is required 」";
            isInvalid = true;
        }

        if (!emailInputEl.value) {
            emailErrorEl.innerText = "「 Email is required 」";
            isInvalid = true;
        }

        console.log(confirmInputEl.value)
        if (confirmInputEl.value != emailInputEl.value) {
            confirmGroupEl.classList.add('register-confirm--invalid');
            isInvalid = true;
        }
        if (isInvalid) {
            event.preventDefault();
        }

    });

})();