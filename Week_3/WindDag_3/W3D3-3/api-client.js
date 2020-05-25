const API_KEY = ``;
const getData = async () => {
    const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    try {        
        const res = await fetch(apiURL, {method: "GET"});
        const data = await res.json();
        console.log("The data is retrieved");
        return data
    } catch (err) {
        console.log(err);
        return error
    }
};
