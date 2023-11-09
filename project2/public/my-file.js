"use strict";
(function () {

    // For menu navigation
    const buttonEl = document.getElementById("menu-button");

    buttonEl.addEventListener("click", function () {
        const listEl = document.querySelector(".header-menu-list");
        const menuEl = document.querySelector(".header-menu");
        listEl.classList.toggle("open-list");
        menuEl.classList.toggle("open-menu");
        listEl.classList.toggle("display-nav");
    });

    // For Subscribe button
    const modalEl = document.querySelector(".modal");
    const opens = document.querySelectorAll(".open");
    const closes = document.querySelectorAll(".close");

    for (let i = 0; i < opens.length; i++) {
        opens[i].addEventListener("click", () => {
            modalEl.showModal();
        });
    }
    for (let i = 0; i < closes.length; i++) {
        closes[i].addEventListener("click", () => {
            modalEl.close();
        });
    }

    // For form validation
    const formEl = document.querySelector('.register');
    const emailErrorEl = document.querySelector('.form-email-error');
    const emailInputEl = document.querySelector('.email');
    const confirmErrorEl = document.querySelector('.form-confirm-error');
    const confirmInputEl = document.querySelector('.confirm');

    emailInputEl.addEventListener('input', (event) => {
        var str = document.myform.email1.value;
        if (str.indexOf("@") != -1) {
            emailErrorEl.innerHTML = "";
        }
        else if (emailInputEl.value) {
            emailErrorEl.innerHTML = "This field be a valid email address including a @";
        }

    });

    confirmInputEl.addEventListener('input', (event) => {
        if (confirmInputEl.value === emailInputEl.value) {
            confirmErrorEl.innerHTML = "";
        }
        else {
            confirmErrorEl.innerHTML = "This field must match the provided email address";
        }
    });

    formEl.addEventListener('submit', (event) => {

        let isInvalid = false;
        var str = document.myform.email1.value;

        if (isInvalid) {
            event.preventDefault();
        }

        if (!emailInputEl.value) {
            emailErrorEl.innerHTML = "This field is required";
            event.preventDefault();
        }
        else if (confirmInputEl.value != emailInputEl.value) {
            confirmErrorEl.innerHTML = "This field must match the provided email address";
            event.preventDefault();
        }

        if (str.indexOf("@") != -1) {

        }

    });

})();