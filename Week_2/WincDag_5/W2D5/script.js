const unorderedListLocation = document.querySelector("#listed-movies")
const navInputNameLocation = document.getElementsByName("movie")
const addMoviesToDom = (eachMovie) => { 
    eachMovie.forEach(movie => {
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
const movieTitleArray = (eachMovie, wordToFilter) => {
    let x = eachMovie.filter(movie => movie.Title.includes(wordToFilter))
    console.log(x)
    addMoviesToDom(x)
}
const movieYearArray = (eachMovie) => {
    let x = eachMovie.filter(movie => movie.Year >= 2014)
    console.log(x)
    addMoviesToDom(x)
}
const removeMovies = (eachMovie) => {
    unorderedListLocation.innerHTML='';
}
const domRadioSelection = (radioSelection) => {
    switch (radioSelection.srcElement.value) {
        case "nieuwsteFilms" : 
            removeMovies()           
            movieYearArray(movieDatabase)      
        break;
        default:
            removeMovies()   
            movieTitleArray(movieDatabase, radioSelection.srcElement.value)          
        break;
      }
}
let inputArray = Array.from(navInputNameLocation);
inputArray.forEach(element => element.addEventListener('change', domRadioSelection))