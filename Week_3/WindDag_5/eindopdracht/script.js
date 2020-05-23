// const result = async function() {
//     const data = await getData();    
//     return data
// }
const result = getData().then((value) => {
    console.log(value)
    pushListItemToDom(value)
    return value
});

//maakt list-items aan met tasks
const pushListItemToDom = (task) => {    
    const listLocation = document.querySelector('#opdrachten-list')   
    let newLi = document.createElement("li")
    newLi.innerHTML = task;    
    listLocation.appendChild(newLi)   
};