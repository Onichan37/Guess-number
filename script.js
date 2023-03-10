let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.color = '#60b347';
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if no input
  if (!guess) {
    displayMessage('β No number!');
  }

  //if guess is correct
  else if (guess === secretNumber) {
    displayMessage('π Correct Number');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      changeBodyColor('#60b347');
      document.querySelector('.number').style.width = '30rem';
      displayNumber(secretNumber);
    }
  }

  //if guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? 'πToo High' : 'π Too Low');
      displayScore(score);
    } else {
      changeBodyColor('red');
      displayMessage('You lost the game π');
      displayScore(0);
    }
  }
});

// button again
btnAgain.addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(20);
  changeBodyColor('#222');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
