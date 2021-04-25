fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num20')
    .then(function(responseData){
        return responseData.json()
    })
    .then(function(jsonData){
        console.log(jsonData)
    })