const winningImage = document.getElementById('win-image');
const losingImage = document.getElementById('losing-image');
const hangmanImage = document.getElementById('hangman-image');

hangmanImage.src = 'images/img-0.png';
winningImage.src = 'images/celebration.jpg'
losingImage.src = 'images/sauron.jpg';


addAlphabet();
guessesColorChange();

const wrongGuesses = document.getElementById("wrong-guesses");
wrongGuesses.innerText = 0;

const fetchFileURL = 'data/json/wordsapi_sample.json';

fetch(fetchFileURL)
    .then(function(response){
        console.log('response ok');
        if(response.ok){
            let responseAsJson = response.json();
            return responseAsJson;
        }else{
            console.log('error with response');
        }
    })
    .then(function( jsonData ){
        
    })
    .catch(function(){
        console.log('error with response');
    }); 