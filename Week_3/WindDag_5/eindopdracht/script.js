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
            pushListItemToDom(task.description, task.id, task.done)
        })
    }); 
}
//maakt checkbox aan
function createCheckbox (taskid, status) {    
    let newCheckbox = document.createElement("input")
    newCheckbox.setAttribute('type', 'checkbox')
    newCheckbox.setAttribute('class', 'status')    
    newCheckbox.setAttribute('onclick', `postSelectionfrom${status}("${taskid}");`)    
    return newCheckbox    
}
//maakt changetext box
function createCustomTextArea (taskid) {
    let newTextArea = document.createElement("input")
    newTextArea.setAttribute('type', 'text')
    newTextArea.setAttribute('class', 'change-textarea')
    newTextArea.setAttribute('name', 'custom-text')
    newTextArea.setAttribute('id', `${taskid}`)
    return newTextArea    
}
//maakt changetext button
function createCustomTextSubmitButton (taskid) {
    let newTextAreaSubmit = document.createElement("button")
    newTextAreaSubmit.setAttribute('type', 'button')
    newTextAreaSubmit.setAttribute('name', 'custom-text')
    newTextAreaSubmit.setAttribute('class', 'change-textarea-button')
    newTextAreaSubmit.setAttribute('onclick', `updateText("${taskid}")`);
    newTextAreaSubmit.innerHTML = "Change to"
    return newTextAreaSubmit
}
//maakt list-items aan
const pushListItemToDom = (task, taskid, status) => {  
    const listLocation = document.querySelector('#opdrachten-list')   
    let newLi = document.createElement("li")
    newLi.setAttribute('class', status)
    
    let newImg = document.createElement("img")    
    newImg.setAttribute('alt', 'delete icon');
    newImg.setAttribute('onclick', `deleteData("${taskid}");`);
    let newText = document.createElement("p")
    newText.innerHTML = task;
    newLi.appendChild(createCheckbox(taskid, status)) 
    newLi.appendChild(newText)
    newLi.appendChild(createCustomTextArea(taskid)) 
    newLi.appendChild(createCustomTextSubmitButton(taskid))  
    newLi.appendChild(newImg) 
    listLocation.appendChild(newLi)   
};
//maakt de lijst leeg
const emptyList = () => {
    const listLocation = document.querySelector('#opdrachten-list')
    listLocation.innerHTML = ""            
};
result()