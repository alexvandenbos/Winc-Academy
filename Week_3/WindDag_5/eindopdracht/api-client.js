const API_KEY = `Alex`;
const getData = async () => {
    const apiURL = `https://wincacademydatabase.firebaseio.com/${API_KEY}/Tasks.json`
    try {        
        const res = await fetch(apiURL, {method: "GET"});
        const data = await res.json();
        console.log("The getData function has retrieved API data");
        //console.log(data)
        return data
    } catch (err) {
        console.log(err);
        return error
    }
};
