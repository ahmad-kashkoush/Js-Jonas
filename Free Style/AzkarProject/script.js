'use strict'
// Counter set
// selectors
// const counter = document.querySelectorAll('.counter');
const piece = document.querySelectorAll('.piece');
// functions
const decCounter = function () {
    const counter = this.querySelector('.counter');
    const icn = document.createElement('i');
    icn.classList.add('fa-solid');
    icn.classList.add('fa-rocket');
    if (counter.textContent !== icn.textContent) {
        let value = Number(counter.textContent);
        value--;
        if (value !== 0) {
            counter.textContent = value;
        } else {

            counter.textContent = '';
            counter.appendChild(icn);
        }
    }
}

// counter.addEventListener('click', decCounter);
for (let i = 0; i < piece.length; i++)
    piece[i].addEventListener('click', decCounter);


// toggle dark and white mode
const themeIcon = document.querySelector('.theme');
themeIcon.addEventListener('click', function () {
    document.querySelector('.page').classList.toggle('bg-white');
    document.querySelector('.page').classList.toggle('bg-black');
})
//  side bar collapse
const collapseIcon = document.querySelector('.collapse');
const sideBar = document.querySelector('.sidebar');

collapseIcon.addEventListener('click', function () {
    sideBar.classList.toggle('sidebar-collapse');
})