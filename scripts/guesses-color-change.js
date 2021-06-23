function guessesColorChange(){

    const guessContainer = document.getElementById("incorrect-guesses");
    const incorrectGuessCounter = document.getElementById("wrong-guesses");

    if(incorrectGuessCounter.textContent < 2){
        guessContainer.style.backgroundColor = "#E1E5EA";
    } else if(incorrectGuessCounter.innerText >= 2 && incorrectGuessCounter.innerText < 5) {
        guessContainer.style.backgroundColor = "#F5A962";
    }else{
        guessContainer.style.backgroundColor = "red";
    }
}