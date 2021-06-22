const winningImage = document.getElementById('win-image');
const losingImage = document.getElementById('losing-image');
const hangmanImage = document.getElementById('hangman-image');
const wordOutput = document.getElementById('word');
const hintOutput = document.getElementById('hint'); 

hangmanImage.src = 'images/img-0.png';
winningImage.src = 'images/celebration.jpg'
losingImage.src = 'images/sauron.jpg';


addAlphabet();
guessesColorChange();

const wrongGuesses = document.getElementById("wrong-guesses");
wrongGuesses.innerText = 0;

const fetchFileURL = 'data/json/words.json';

fetch(fetchFileURL)
    .then(function(response){
        console.log('response ok');
        if(response.ok){
            const jsonData = response.json();
            return jsonData;
            
        }else{
            console.log('error with response');
        }
    })
    .then(function(jsonData){
        const data = jsonData[Math.floor(Math.random()*jsonData.length)];
        
        const Word = {

            word: data.word,
            hint: data.hint
            

        }

        wordOutput.innerHTML = Word.word;
        hintOutput.innerText = Word.hint;
    })
    .catch(function(){
        console.log('error with response');
    });
    



