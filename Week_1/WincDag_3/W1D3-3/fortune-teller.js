const tellFortune = (numberChildren, partnerName, geoLocation, jobTitle) => {
    let future = "You will be a " + jobTitle + " in " + geoLocation + "and married to " + partnerName + " with " + numberChildren + " kids";
    console.log(future);
}
    
tellFortune(4, 'Felicia', "Bali", "Programmer");