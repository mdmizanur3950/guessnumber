let min = 5,
    max = 20,
    winningScore = getRandomNumber(min,max);
    guessLeft = 3;
    
const game = document.querySelector('#game'),
      minNum = document.querySelector('#min-num'),
      maxNum = document.querySelector('#max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      

// Reload the page after Play again btn press
game.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
});


// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for Guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // validate the input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }

  // Check if Won
  if (guess === winningScore) {

    gameOver(true, `Hooray! You have won! ${winningScore} is the correct number.`);

  } else {
    // Subtract the Guess Left
    guessLeft -= 1;

    if (guessLeft === 0) {
      // game Over, Lost

      gameOver(false, `Sorry! You didn't Win! The corrct number is ${winningScore}.`);

      // Change the text of the Button
      // guessBtn.getAttribute('value')

    } else {
      // game continue, wrong answer
      
      // Set the border Input Field Border Color
      guessInput.style.borderColor = 'red';

      // Clear the input
      guessInput.value = '';

      // Set the Error Message
      setMessage(`Sorry, ${guess} is not the correct number. You have ${guessLeft} guesses left.`, 'red');
    }

    
  }

});

// Game Over Function
function gameOver (won,msg){

  // Set the Color
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable the Input Field
  guessInput.disabled = true;
  // Set the input border to green
  guessInput.style.borderColor = color;
  // Set the Message
  setMessage(msg, color);
  
  // Change the Btn Text
  guessBtn.value = 'Play Again';
  
  // Add a class to btn
  guessBtn.className += 'play-again';

}


// Message Function
function setMessage(msg, color) {
  // Show the Message
  message.textContent = msg;
  // Set the color of the message
  message.style.color = color;
}

// Get the random Winning Number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min; 
}