fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    .then(function(responseData){
        return responseData.json()
    })
    .then(function(jsonData){
        console.log(jsonData)
    })