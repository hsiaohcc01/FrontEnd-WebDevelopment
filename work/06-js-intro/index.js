"use strict";

const buttonEl = document.querySelector("button");
function buttonClick() {
    const menunEl = document.querySelector(".menu .hidden");
    menunEl.classList.toggle("active");
}
buttonEl.addEventListener("click", buttonClick);