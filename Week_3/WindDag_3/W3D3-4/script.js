const unorderedListLocation = document.querySelector('#test')

const ietsMetData = async function() {
    const data = await getData();    
    console.log("Hier is je data", data.genres)
    addGenrestoDom(data.genres)
    const datafilm = await getOne();
    console.log("Hier is je tweede data", datafilm.movie_results[0])
}
ietsMetData()

const addGenrestoDom = (apiData) => {
    apiData.forEach(genre => {
        let newLi = document.createElement("li")
        let newP = document.createElement("p")
        newP.innerText = `Genre naam: ${genre.name}, ID: ${genre.id}`;    
        newLi.appendChild(newP)
        unorderedListLocation.appendChild(newLi)         
    });
}
const favouriteMovietoDom = (apiData) => {
        let newLi = document.createElement("li")
        let newP = document.createElement("p")
        newP.innerText = `Genre naam: ${genre.name}, ID: ${genre.id}`;    
        newLi.appendChild(newP)
        unorderedListLocation.appendChild(newLi)             
};
// const dieEneData = function().then(()=>{

// })

