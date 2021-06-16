const letters = document.getElementById("letters-container");
const incorrectGuessCounter = document.getElementById("wrong-guesses");
const guessContainer = document.getElementById("incorrect-guesses");

const alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];



alphabet.forEach(function(letter){
    const button = document.createElement("button");
    button.className = "alphabet";
    const buttonValue = document.createTextNode(letter);
    button.appendChild(buttonValue);
    letters.appendChild(button);
})


if(incorrectGuessCounter.textContent < 2){
    guessContainer.style.backgroundColor = "#E1E5EA";
} else if(incorrectGuessCounter.textContent > 2 && incorrectGuessCounter.textContent < 5) {
    guessContainer.style.backgroundColor = "#F5A962";
}else{
    guessContainer.style.backgroundColor = "red";
}

