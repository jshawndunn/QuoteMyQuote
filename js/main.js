//grab needed elements
let onePlayer = document.querySelector(".welcome__one-player");
let twoPlayer = document.querySelector(".welcome__two-player");
let welcomeScreen = document.querySelector(".welcome");
let gameScreen = document.querySelector('.game');

//add click event to buttons to start game
onePlayer.setAttribute("onclick", 'runGame()')
twoPlayer.setAttribute("onclick", 'runGame()')


//main game loop
function runGame(){
    //grab need elements
    let currentQuote = document.querySelector(".game__current-quote");
    let playerInput = document.querySelector(".game__player-input");
    //set current player input to an empty string
    playerInput.value = ""
    gameScreen.style.display = "flex";
    welcomeScreen.style.display = "none";
    //array to hold results of typed quotes
    let playerOneOutput = [];
    let playerOnePosition = 0;

    //grab data
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    .then(function(responseData){
        return responseData.json()
    })
    .then(function(jsonData){
        //print current quote to screen
        currentQuote.innerText = jsonData[playerOnePosition]['quote']
        //quit button
        let quit = document.querySelector(".game__quit")
        quit.addEventListener("click", ()=>window.location.reload())
        //restart button
        let restart = document.querySelector(".game__restart")
        restart.addEventListener("click", ()=>{
            playerOneOutput = []
            playerOnePosition = 0
        })

        //actions when player hit enter
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
