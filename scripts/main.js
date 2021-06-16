const letters = document.getElementById("letters-container");

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