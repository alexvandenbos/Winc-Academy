const API_KEY = `Alex`;
const getData = async () => {
    const apiURL = `https://wincacademydatabase.firebaseio.com/${API_KEY}/Tasks.json`
    try {        
        const res = await fetch(apiURL, {method: "GET"});
        const data = await res.json();
        console.log("The getData function has retrieved API data");
        return data
    } catch (err) {
        console.log(err);
        return error
    }
};
const postData = async () => {
    let taskdescription = document.getElementById('to-do-task-id').value
    console.log(`Ik post: ${taskdescription}`)
    const apiURL = `https://wincacademydatabase.firebaseio.com/${API_KEY}/Tasks.json`
    let response = await fetch(apiURL, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            "description": taskdescription, 
            "done": false
        })
    })
    console.log(response)
    emptyList()
    result()
};
const deleteData = async (taskid) => {
    const apiURL = `https://wincacademydatabase.firebaseio.com/${API_KEY}/Tasks/${taskid}.json`
    let response = await fetch(apiURL, {
        method: 'DELETE', 
        headers: {'Content-Type': 'application/json;charset=utf-8'},
    })
    console.log(response)
    emptyList()
    result()
}
const postSelectionfromfalse = async (taskid) => {
    const apiURL = `https://wincacademydatabase.firebaseio.com/${API_KEY}/Tasks/${taskid}/done.json`
    let response = await fetch(apiURL, {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(
            true
        )
    })
    console.log(response)
    emptyList()
    result()
};
const postSelectionfromtrue = async (taskid) => {
    const apiURL = `https://wincacademydatabase.firebaseio.com/${API_KEY}/Tasks/${taskid}/done.json`
    let response = await fetch(apiURL, {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(
            false
        )
    })
    console.log(response)
    emptyList()
    result()
};
const updateText = async (taskid) => {
    changedText = document.getElementById(taskid).value
    const apiURL = `https://wincacademydatabase.firebaseio.com/${API_KEY}/Tasks/${taskid}/description.json`
    let response = await fetch(apiURL, {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(
            changedText
        )
    })
    console.log(response)
    emptyList()
    result()
};