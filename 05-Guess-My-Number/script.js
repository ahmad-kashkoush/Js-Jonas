
'use strict';
let dice = Math.trunc(Math.random() * 20 + 1);
let winner = true;
console.log(dice);
let guess;
let highScore = document.querySelector('.highscore');
let score = document.querySelector('.score');
const initialScore = Number(score.textContent);
let stat = document.querySelector('.number-stat');
document.querySelector('.check').addEventListener("click", () => {
    if (Number(score.textContent) === 0) {
        stat.textContent = ` You've lost😠`
        document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(102,6,27,1) 0%, rgba(200,5,5,1) 100%)';
        document.querySelector('.guess').style.background = 'linear-gradient(90deg, rgba(102,6,27,1) 0%, rgba(200,5,5,1) 100%)';
    } else {





        guess = document.querySelector('.guess').value;
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

});


document.querySelector('.again').addEventListener('click', function () {
    score.textContent = initialScore;
    document.querySelector('.winning>span').textContent = '?';
    stat.textContent = 'start guessing ...';
    document.querySelector('.guess').value = ' ';
    document.body.style.background = ' linear-gradient(90deg, #525151 -65%, #000000 100%)';
    document.querySelector('.guess').style.background = ' linear-gradient(90deg, #525151 -65%, #000000 100%)';

});