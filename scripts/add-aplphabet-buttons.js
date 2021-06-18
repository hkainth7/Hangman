function addAlphabet(){
    
    const letters = document.getElementById("letters-container");
    const alphabet = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
    ];


    alphabet.forEach(function(letter){
        const button = document.createElement("button");
        button.className = "alphabet";
        const buttonValue = document.createTextNode(letter);
        button.appendChild(buttonValue);
        letters.appendChild(button);
    })

}

