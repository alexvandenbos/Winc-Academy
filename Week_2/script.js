const unorderedListLocation = document.querySelector("#listed-movies")


const addMoviesToDom = (selectedMovies) => { 
    selectedMovies.forEach(movie => {
        let titleLink = "https://www.imdb.com/title/" + movie.imdbID
        let newLi = document.createElement("li")
        let newA = document.createElement("a")
        let newImg = document.createElement("img")
        newImg.setAttribute('src', movie.Poster)
        newA.setAttribute('href', titleLink)
        newA.setAttribute('target', '_blank')         
        newA.appendChild(newImg)       
        newLi.appendChild(newA)
        unorderedListLocation.appendChild(newLi)        
    });          
};
addMoviesToDom(movieDatabase)