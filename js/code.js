'use strict';

let links = document.querySelectorAll('nav a');
let sections = document.querySelectorAll('section');

links.forEach(function (e) {
    e.onclick = function () {
        let current_active = document.querySelector('section.active');
        if (current_active) {
            current_active.classList.remove('active');
        }
        let selected_id = this.getAttribute('data-id');
        console.log(selected_id);
        sections[selected_id].classList.add('active');
    }
})

setTimeout(() => {
    document.querySelector('section').classList.add('active')
}, 500)