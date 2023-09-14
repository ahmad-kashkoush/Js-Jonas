
'use strict';

// Create a random generator
let dice = Math.trunc(Math.random() * 20 + 1);



//prepare your selectors 🚀
let highScore = document.querySelector('.highscore');
let score = document.querySelector('.score');
const initialScore = Number(score.textContent);
let stat = document.querySelector('.number-stat');
let winner = false;

// action on clicking check button 🥳
document.querySelector('.check').addEventListener("click", () => {
    // If you score is 0
    if (!winner) {
        if (Number(score.textContent) === 0) {
            stat.textContent = ` You've lost😠`
            document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(102,6,27,1) 0%, rgba(200,5,5,1) 100%)';
            document.querySelector('.guess').style.background = 'linear-gradient(90deg, rgba(102,6,27,1) 0%, rgba(200,5,5,1) 100%)';
        } else {
            let guess = document.querySelector('.guess').value;


            // if empty guess
            if (!guess && guess != '0') {
                stat.textContent = ` ❌ NO number `;
            } else if (Number(guess) === Number(dice)) {
                stat.textContent = `🥳 You've Won`;
                highScore.textContent = Math.max(Number(score.textContent), Number(highScore.textContent));
                document.querySelector('.winning>span').textContent = guess;
                document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(6,102,12,1) 0%, rgba(41,200,5,1) 100%)';
                document.querySelector('.guess').style.background = 'linear-gradient(90deg, rgba(6,102,12,1) 0%, rgba(41,200,5,1) 100%)';
            }


            else {
                if (Number(guess) > Number(dice))
                    stat.textContent = ` 📈 Too High`;
                else if (Number(guess) < Number(dice))
                    stat.textContent = ` 📉 Too low`;
                score.textContent = Number(score.textContent) - 1;
            }
        }
    }

});


// reseting the page without reloading by clicking the again button
document.querySelector('.again').addEventListener('click', function () {
    // change the dice
    dice = Math.trunc(Math.random() * 20 + 1);

    score.textContent = initialScore;
    document.querySelector('.winning>span').textContent = '?';
    stat.textContent = 'start guessing ...';
    document.querySelector('.guess').value = ' ';
    document.body.style.background = ' linear-gradient(90deg, #525151 -65%, #000000 100%)';
    document.querySelector('.guess').style.background = ' linear-gradient(90deg, #525151 -65%, #000000 100%)';

});