'use strict';

const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const getCookie = name => {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) return value;
  }
  return null;
};

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = Number(getCookie('highScore')) || 0;

document.querySelector('.highscore').textContent = highScore;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const updateScore = newScore => {
  score = newScore;
  document.querySelector('.score').textContent = score;
};

const resetGame = () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess < 1 || guess > 20) {
    alert('Please enter a number between 1 and 20.');
  }

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === number) {
    displayMessage('Winner!');
    document.querySelector('.number').textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      setCookie('highScore', highScore, 30);
    }
    document.querySelector('.check').disabled = true;
  } else {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too low!');
      updateScore(score - 1);
    } else {
      displayMessage('Game Over!');
      updateScore(0);
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', resetGame);
