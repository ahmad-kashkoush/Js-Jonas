'use strict';
// slectors
const player = [], score = [], curr = [];

player[0] = document.querySelector('.player--0');
player[1] = document.querySelector('.player--1');
score[0] = document.querySelector('#score--0');
score[1] = document.querySelector('#score--1');
curr[0] = document.querySelector('#current--0');
curr[1] = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');


// functions
const changePlayer = function (value, plr) {

    score[plr].textContent = Number(score[plr].textContent) + value;
    curr[plr].textContent = 0;

    let curPlayer = 1 - plr;
    player[curPlayer].classList.add('player--active');
    player[plr].classList.remove('player--active');
    return curPlayer;

}

const rollDice = function (plr) {
    let dice = Math.trunc(Math.random() * 6 + 1);
    diceImg.src = `dice-${dice}.png`;
    console.log(dice);
    if (dice == 1)
        plr = changePlayer(0, plr);
    else {
        curr[plr].textContent = dice;
    }
    return plr;
}


// Events
let curPlayer = 0;
document.querySelector('.btn--hold').addEventListener('click', function () {
    let plr = curPlayer;
    let value = Number(curr[plr].textContent);
    value = value == 1 ? 0 : value;
    curPlayer = changePlayer(value, plr);

});

document.querySelector('.btn--roll').addEventListener('click', () => {
    curPlayer = rollDice(curPlayer);
});

document.querySelector('.btn--new').addEventListener('click', function () {
    for (let i = 0; i < curr.length; i++) {
        curr[i].textContent = 0;
        score[i].textContent = 0;
    }
    player[0].classList.add('player--active');
    player[1].classList.remove('player--active');
});