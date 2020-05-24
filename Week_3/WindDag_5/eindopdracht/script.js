const result = () => { 
    getData().then((taskData) => {
        console.log("Before (the raw result):", taskData);
        let tasks = Object.keys(taskData).map(key => ({
            id: key,
            description: taskData[key].description,
            done: taskData[key].done
        }));
        console.log("After the tasks array", tasks);    
        tasks.forEach(task => {
            pushListItemToDom(task.description, task.id)
        })
    }); 
}

//maakt list-items aan met tasks
const pushListItemToDom = (task, taskid) => {    
    const listLocation = document.querySelector('#opdrachten-list')   
    let newLi = document.createElement("li")
    let newImg = document.createElement("img")
    newImg.setAttribute('src', 'trash-delete-icon.jpg');
    newImg.setAttribute('alt', 'delete icon');
    newImg.setAttribute('height', '15px');
    newImg.setAttribute('width', '15px');
    newImg.setAttribute('onclick', `deleteData("${taskid}");`);
    newLi.innerHTML = task;
    newLi.appendChild(newImg)    
    listLocation.appendChild(newLi)   
};

//maakt de lijst leeg
const emptyList = () => {
    const listLocation = document.querySelector('#opdrachten-list')
    listLocation.innerHTML = ""            
};
result()