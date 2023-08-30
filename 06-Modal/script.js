'use strict';
//  all querySelctors first
let btnOpenModal = document.querySelectorAll('.open-modal');
let modal = document.querySelector('.modal');
let btnCloseModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
//  functions 
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// handling events
for (let i = 0; i < 3; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)
document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
});