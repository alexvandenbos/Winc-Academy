const API_KEY = `a7107738594269d193bcdea1d2cfcac7`;
const IMBD_LIJST = ['tt6105098', 'tt7286456', 'tt1979376']
const getData = async () => {
    const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    try {        
        const res = await fetch(apiURL, {method: "GET"});
        const data = await res.json();
        console.log("The data is retrieved", data);
        return data
    } catch (err) {
        console.log(err);
        return error
    }
};

const getOne = async () => {
    const apiURL = `https://api.themoviedb.org/3/find/${IMBD_LIJST[0]}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
    try {        
        const res = await fetch(apiURL, {method: "GET"});
        const data = await res.json();
        console.log("The second data is retrieved", data);
        return data
    } catch (err) {
        console.log(err);
        return error
    }
};
