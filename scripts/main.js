addAlphabet();

const winningImage = document.getElementById('win-image');
const losingImage = document.getElementById('losing-image');
const hangmanImage = document.getElementById('hangman-image');
const wordOutput = document.getElementById('word');
const hintOutput = document.getElementById('hint');
const buttons = document.getElementsByClassName('alphabet'); 
const guessedLetters = [];

hangmanImage.src = 'images/img-0.png';
winningImage.src = 'images/celebration.jpg'
losingImage.src = 'images/sauron.jpg';




guessesColorChange();

const wrongGuesses = document.getElementById("wrong-guesses");
wrongGuesses.innerText = 0;

const fetchFileURL = 'data/json/words.json';

window.addEventListener('load', function(){

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

        return data;
    })

    .then(function(data){
        const answerArray = []
        
        for(let i = 0; i < data.word.length; i++){
            answerArray[i] = '_';
            const str = answerArray.join(' ');
            wordOutput.innerHTML = str;
        }

        
        for(let i = 0; i < buttons.length; i++){

            buttons[i].addEventListener('click', function(){
                guessedLetters.push(buttons[i].innerHTML);
                console.log(guessedLetters);
            })
        
        }
        
        
        
    })
    .catch(function(){
        console.log('error with response');
    });
    
})




