//set up starting variables
let playerOnePosition = 0;
let playerOneScore = 0;
const quotes = [];
const playerOneOutput = [];

//async function to grab quotes
const getQuotes = async () => {
    //response promise object
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10');
    //if error getting data
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    //json promise object
    const data = await response.json();
    return data;
};
//push a set of 10 quotes to quotes array
getQuotes()
    .then(quote => {
        quote.forEach(element => {
            quotes.push(element)
     });
    });
getQuotes()
    .then(quote => {
        quote.forEach(element => {
            quotes.push(element)
            //print current quote to screen
           displayQuotes()
     });
    });

function displayQuotes() {
    currentQuoteImage.setAttribute('src', quotes[playerOnePosition]['image'])
    currentQuote.innerText = quotes[playerOnePosition]['quote']
    currentQuoteCharacter.innerText = quotes[playerOnePosition]['character']
}
//grab needed elements
let start = document.querySelector(".welcome__start");
let currentQuoteCharacter = document.querySelector(".game__character");
let currentQuoteImage = document.querySelector(".game__quote-image");
let currentQuote = document.querySelector(".game__quote");
let playerInput = document.querySelector(".game__player-input");
let welcomeScreen = document.querySelector(".welcome");
let gameScreen = document.querySelector('.game');
let quit = document.querySelector(".game__quit");
let restart = document.querySelector(".game__restart");
let scoreBox = document.querySelector(".game__wpm")


//add click event to buttons to start game
start.setAttribute("onclick", 'runGame()')

//quit button
quit.addEventListener("click", ()=>window.location.reload())

//restart button
restart.addEventListener("click", ()=>{
    quotes.splice(0, quotes.length);
    playerOneOutput.length = 0;
    playerOnePosition = 0;
    playerOneScore = 0;
    playerInput.readOnly = false;
    scoreBox.innerHTML = 'WPM';

    getQuotes()
    .then(quote => {
        quote.forEach(element => {
            quotes.push(element)
        });
    });
    getQuotes()
    .then(quote => {
        quote.forEach(element => {
            quotes.push(element)
        });
        displayQuotes()
    });
    playerInput.select();
    setTimeout(endRound, 60000);
})

//comapre to strings
function compareStrings(){
    playerOneOutput.forEach((e,i) => {
        let curQuote = quotes[i].quote.split(" ")
        e.split(" ").forEach((e,i) => {
            if(e === curQuote[i]) {
                playerOneScore++
            }
        })
    })
    return (playerOneScore)
}

//round finish function
function endRound(){
    playerInput.readOnly = true;
    if(playerInput.value){
        playerOneOutput.push(playerInput.value)
    }
    playerInput.value = ""
    score = compareStrings();
    scoreBox.innerHTML = score
}



//main game loop
function runGame(){
    setTimeout(endRound, 60000);
    gameScreen.style.display = "flex";
    welcomeScreen.style.display = "none";
    playerInput.select();

    function nextQuote() {
        playerOneOutput.push(playerInput.value)
        playerInput.value = ""
        playerOnePosition++
        displayQuotes()
    };

    //actions when player hit enter
    playerInput.addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
           nextQuote()
        }
    })
}
