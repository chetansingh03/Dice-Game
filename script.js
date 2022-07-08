'use strict';
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const diceimg = document.querySelector('.dice');
const btnNewgame = document.querySelector('.btn--new');
const btnRolldice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
score1.textContent = 0;
let scores, currentScore, activepalyer, play;
const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activepalyer = 0;
    play = true;

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;

    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
};
init();
const fun1 = function() {
    if (play) {
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        diceimg.classList.remove('hidden');
        diceimg.src = `dice-${diceNumber}.png`;
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activepalyer}`).textContent =
                currentScore;
        } else {
            document.getElementById(`current--${activepalyer}`).textContent = 0;

            currentScore = 0;
            activepalyer = activepalyer === 0 ? 1 : 0;

            player1.classList.toggle('player--active');
            player2.classList.toggle('player--active');
        }
    }
};
const fun2 = function() {
    if (play) {
        scores[activepalyer] += currentScore;

        document.getElementById(`score--${activepalyer}`).textContent =
            scores[activepalyer];
        if (scores[activepalyer] >= 20) {
            play = false;
            document
                .querySelector(`.player--${activepalyer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activepalyer}`)
                .classList.remove('player--active');
            diceimg.classList.add('hidden');
        } else {
            document.getElementById(`current--${activepalyer}`).textContent = 0;

            currentScore = 0;
            activepalyer = activepalyer === 0 ? 1 : 0;

            player1.classList.toggle('player--active');
            player2.classList.toggle('player--active');
        }
    }
};

document.querySelector('.btn--roll').addEventListener('click', fun1);

document.querySelector('.btn--hold').addEventListener('click', fun2);

btnNewgame.addEventListener('click', init);