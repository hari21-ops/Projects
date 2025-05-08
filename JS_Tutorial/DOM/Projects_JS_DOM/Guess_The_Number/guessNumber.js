let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);    
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number between 1 to 100 !")
    }else if(guess < 1){
        alert("Please enter a valid number between 1 to 100 !")
    }else if(guess > 100){
        alert("Please enter a valid number between 1 to 100 !")
    }
    else{
        prevGuess.push(guess); 
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was:${randomNumber}`);
            endGame(); 
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("Bang!!, Your Guess is absolutely right, Congratulations !!");
    }
    else if(guess < randomNumber){
        displayMessage("Your guess is too low !!");
    }
    else if(guess > randomNumber){  
        displayMessage("Your guess is too high !!");
        //endGame();
    }
    /*else {
        displayMessage("You can try again, You can do it!! ");
    }*/
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true; 
    })
}

function endGame(){
    userInput.value = " ";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start new Game.</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

