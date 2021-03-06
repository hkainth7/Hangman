addAlphabet();

const winningImage = document.getElementById('win-image');
const youWon = document.getElementById('you-won');
const youLost = document.getElementById('you-lose');
const losingImage = document.getElementById('losing-image');
const hangmanImage = document.getElementById('hangman-image');
const wordOutput = document.getElementById('word');
const hintOutput = document.getElementById('hint');
const buttons = document.getElementsByClassName('alphabet'); 
const tryAgain = document.getElementById('try-again');
const playAgain = document.getElementById('play-again');
const delayLoss = 1000;
const delayWin = 250;
let guessedLetters = [];
let str = "";
let imageSrc = 0;

hangmanImage.src = 'images/img-0.png';
winningImage.src = 'images/celebration.jpg'
losingImage.src = 'images/sauron.jpg';






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
        let remainingLetters = data.word.length;
        let word = data.word;
        
        for(let i = 0; i < remainingLetters; i++){
            answerArray[i] = '_';
        }

        const str = answerArray.join(' ');
        wordOutput.innerHTML = str;
        
        for(let i = 0; i < buttons.length; i++){

            buttons[i].addEventListener('click', function(){
                
                let letter = buttons[i].innerHTML.toLowerCase();
                let button = buttons[i];
                button.disabled = true;

                if(word.includes(letter)){
                    
                    for(let i = 0; i < word.length; i++){

                        if(letter == word[i]){
                            
                            answerArray[i] = letter;
                            wordOutput.innerHTML = answerArray.join(" ");
                            remainingLetters--;
                            if(remainingLetters == 0){
                                hangmanImage.style.display = "none";
                                setTimeout(function(){
                                    $("#you-won").fadeIn("slow");
                                },delayWin);
                                
                            }
                        }
                    }
                    
                }else{
                    guessesColorChange();
                    wrongGuesses.innerText++;
                    imageSrc++
                    hangmanImage.src = `images/img-${imageSrc}.png`;
                    if(wrongGuesses.innerText == 6){
                        wordOutput.innerHTML = word;
                        hangmanImage.style.display = "none";
                        setTimeout(function(){
                            $("#you-lose").fadeIn("slow");
                        },delayLoss);
                        
                    }
                    
                }
               
            })
        
        }

        return data;

    })
 
    .catch(function(){
        console.log('error with response');
    });
    
})

tryAgain.addEventListener('click',function(){
    location.reload();
})

playAgain.addEventListener('click',function(){
    location.reload()
})