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