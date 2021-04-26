let player1 = document.querySelector(".welcome__player1");
let player2 = document.querySelector(".welcome__player2");
let welcomeScreen = document.querySelector(".welcome");
let gameScreen = document.querySelector('.game');

player1.setAttribute("onclick", 'runGame(this)')
player2.setAttribute("onclick", 'runGame(this)')



function runGame(player){
    let currentQuote = document.querySelector(".game__current-quote");
    let playerInput = document.querySelector(".game__player-input");
    playerInput.value = ""
    
    function madeIt(){
        console.log(`${this.value}`)
    }
    
    gameScreen.style.display = "block";
    welcomeScreen.style.display = "none";
    
    const data = fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    .then(function(responseData){
        return responseData.json()
    })
    .then(function(jsonData){
        currentQuote.innerText = jsonData[0]['quote']
        playerInput.addEventListener("keyup", madeIt)
        
        return jsonData
    })
    .catch(function(error){
        console.log(`${error} has occured.`)
    })
}
