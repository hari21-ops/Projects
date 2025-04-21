/*
function checkGuess() {
    alert("I am a placeholder !");
}

checkGuess();
*/
let randomNumber = Math.floor(Math.random() * 100 ) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");


const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener("click", checkGuess);
guessField.focus();

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true; 
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new Game";
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame)
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetpara of resetParas){
        resetpara.textContent = "";
    }


    resetButton.parentNode.removeChild(resetButton);


    guessField.disabled = false;
    guessSubmit.disaled = false;
    guessField.value = "";
    guessField.focus();


    lastResult.style.backgroundColor = "white";


    randomNumber = Math.floor(Math.random() * 100 ) + 1;
}

const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}

function checkGuess(){
    const userGuess = Number(guessField.value);
    if(guessCount == 1){
        guesses.textContent = "Previous Guesses";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess == randomNumber){
        lastResult.textContent = "Congratulations, you got it rught!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if(guessCount === 10) {
        lastResult.textContent = " !!! GAME OVER !!!";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else{
        lastResult.textContent = "Wrong !";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "Last guess was too low !";
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = "Last guess was too high !";
        }
    }

    guestCount++;
    guessField.value = "";
    guessField.focus();
}




