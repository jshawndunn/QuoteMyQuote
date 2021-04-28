//set up quotes array
let quotes = [];
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
     });
    });


//grab needed elements
let onePlayer = document.querySelector(".welcome__one-player");
let twoPlayer = document.querySelector(".welcome__two-player");

//add click event to buttons to start game
onePlayer.setAttribute("onclick", 'runGame()')
twoPlayer.setAttribute("onclick", 'runGame()')


let playerOnePosition = 0;
//main game loop
function runGame(){
    //grab need elements
    let welcomeScreen = document.querySelector(".welcome");
    let gameScreen = document.querySelector('.game');
    let currentQuote = document.querySelector(".game__current-quote");
    let playerInput = document.querySelector(".game__player-input");
    //set current player input to an empty string
    playerInput.value = ""
    gameScreen.style.display = "flex";
    welcomeScreen.style.display = "none";
    //array to hold results of typed quotes
    const playerOneOutput = [];

    //print current quote to screen
    currentQuote.innerText = quotes[playerOnePosition]['quote']
    //quit button
    let quit = document.querySelector(".game__quit")
    quit.addEventListener("click", ()=>window.location.reload())
    //restart button
    console.log(quotes)
    let restart = document.querySelector(".game__restart")
    restart.addEventListener("click", ()=>{
        quotes = [];
        playerOneOutput.length = 0;
        playerOnePosition = 0;
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
                currentQuote.innerText = quotes[playerOnePosition]['quote']
            });
        console.log(quotes)
    })
    //actions when player hit enter
    playerInput.addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
            playerOneOutput.push(playerInput.value)
            console.log(quotes)
            playerInput.value = ""
            playerOnePosition++
            currentQuote.innerText = quotes[playerOnePosition]['quote']
        }
    })
}
