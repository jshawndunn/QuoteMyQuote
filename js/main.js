//grab needed elements
let player1 = document.querySelector(".welcome__player1");
let player2 = document.querySelector(".welcome__player2");
let welcomeScreen = document.querySelector(".welcome");
let gameScreen = document.querySelector('.game');

//add click event to buttons to start game
player1.setAttribute("onclick", 'runGame()')
player2.setAttribute("onclick", 'runGame()')


//main game loop
function runGame(){
    //grab need elements
    let currentQuote = document.querySelector(".game__current-quote");
    let playerInput = document.querySelector(".game__player-input");
    //set current player input to an empty string
    playerInput.value = ""
    gameScreen.style.display = "block";
    welcomeScreen.style.display = "none";
    //array to hold results of typed quotes
    let playerOneOutput = [];
    let playerOnePosition = 0;

    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    .then(function(responseData){
        return responseData.json()
    })
    .then(function(jsonData){
        currentQuote.innerText = jsonData[playerOnePosition]['quote']
        let quit = document.querySelector(".game__quit")
        quit.addEventListener("click", ()=>window.location.reload())
        let restart = document.querySelector(".game__restart")
        restart.addEventListener("click", runGame)

        playerInput.addEventListener('keyup', function(event) {
            if (event.code === 'Enter') {
                playerOneOutput.push(playerInput.value)
                console.log(playerOneOutput)
                playerInput.value = ""
                playerOnePosition++
                currentQuote.innerText = jsonData[playerOnePosition]['quote']
            }
        })
        })
        .catch(function(error){
            console.log(`${error} has occured.`)
        })
}
