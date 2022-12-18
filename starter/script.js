'use strict';

/////////PROIECT GUESSING NUMBER///////////

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //cand nu este o intrare no input

  if (!guess) {
    document.querySelector('.message').textContent =
      'Nu ai scris nici-un numar!';
    //cand scorul este corect
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Felicitari ai ghicit numarul!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '15rem';
  } else if (guess < secretNumber)
    if (score > 1) {
      //cand scorul este prea mare
      document.querySelector('.message').textContent = 'Numarul este prea mic!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Ai pierdut jocul, numarul a fost prea mic!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#bb2222';
    }
  else if (guess > secretNumber) {
    if (score > 1) {
      //cand scorul este prea mare
      document.querySelector('.message').textContent =
        'Numarul este prea mare!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Ai pierdut jocul, numarul a fost prea mare!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#bb2222'; // am implementat de unul singur

      //backround-ul rosu!
    } // avem doua tipuri de clase cu label!
  } else if (guess < secretNumber) {
    // cand scorul este prea mic
    document.querySelector('.message').textContent = 'Numarul este prea mic!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score < 1) {
    document.querySelector('.message').textContent = 'Ai pierdut jocul!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#bb2222';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textConent =
    'Incepe sa ghicesti inca odata!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
