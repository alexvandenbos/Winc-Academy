const buttonList = document.querySelectorAll(".big-five-button");
const spottedAnimals = document.querySelector('#spotted-animals-list');
const removeItemButton = document.querySelector("#remove-first-item-button");
const removeAllItems = document.querySelector('#remove-all-button');
//console.log(buttonList)
//maakt array
NewbuttonList = Array.from(buttonList)
//loop array, logt button text in console, voegt event listener toe per butten en HTML
NewbuttonList.forEach( x => {
    let y = x;
    x.addEventListener('click', function(){
        console.log(y.textContent);
        let newLi = document.createElement("li")        
        newLi.innerHTML = y.textContent
        spottedAnimals.appendChild(newLi)
        console.log(spottedAnimals)
    })
})
removeItemButton.addEventListener('click', function(){
    let child = spottedAnimals.getElementsByTagName('li')[0];
    spottedAnimals.removeChild(child);
})
console.log(spottedAnimals)
removeAllItems.addEventListener('click', function(){
    spottedAnimals.innerHTML = '';

    // let parent = spottedAnimals.getElementsByTagName('ul')[0];
    // let children = spottedAnimals.getElementsByTagName('li');
    // for (let index = 0; index < children.length; index++) {
    //     console.log(index);
    //     console.log(children.length);
    //     spottedAnimals.removeChild(children[index]);
        
    // }
})
