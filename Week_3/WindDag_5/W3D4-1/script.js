//empylist   ​
const emptyList = () => {
    const listLocation = document.querySelector('#opdrachten-list')
    listLocation.innerHTML = ""
};
const pushListItemToDom = (person) => {    
    const listLocation = document.querySelector('#opdrachten-list')    
    let newLi = document.createElement("li")
    newLi.innerHTML = person;    
    listLocation.appendChild(newLi)   
};
//sorteerd op alle landen op alphabet
const landenOpAlphabet = () => {
    emptyList()
    let data = randomPersonData
    let allRegions = data.map(person => {
        return person.region
    })
    allRegions.sort().forEach(person => {
        pushListItemToDom(person)
    })
}
// steenbokVrouwen
const IsSteenbok = (vrouw) => {
    let steenbokken = vrouw.filter(vrouw => {
        let birthDates = new Date(vrouw.birthday.mdy)    
        let birthMonth = birthDates.getMonth()
        let birthDate = birthDates.getDate()
        return (birthMonth >= 11 && birthDate  >= 22) || (birthMonth <= 0 && birthDate <= 19)
    }).map(steenbok => {
        return steenbok.name + steenbok.surname 
    })
    pushListItemToDom(steenbokken)
}
const vrouwen = () => {
    emptyList()
    let personen = randomPersonData
    let sterrenbeeld = personen.filter(element => {
        return element.gender === 'female' && element.age >= 30
    })
    IsSteenbok(sterrenbeeld)
}
//creditcard
const creditkeepers = () => {
    emptyList()
    let mensen = randomPersonData
    let withinayear = mensen.filter(mens => {
        let expireString = mens.credit_card.expiration.split("/");        
        let expireYear = parseInt(expireString[1]) + 2000;
        let expireMonth = parseInt(expireString[0]);
        let yearNow = new Date().getFullYear()
        let monthNow = new Date().getMonth()
        return expireYear - yearNow <= 1 && mens.age >= 18;
    }).map(expcreditcard => {
        let a = expcreditcard.name
        let b = expcreditcard.surname        
        let c = expcreditcard.phone
        let d = expcreditcard.credit_card.number
        return a+` ${b}` + ` phone ${c}` + ` creditcard nr ${d}`
    })
    pushListItemToDom(withinayear)
}

// // click event op de buttons
const landenbtnlocation = document.querySelector("#landen")
landenbtnlocation.addEventListener("click", landenOpAlphabet)

const steenbokvrouwenbtnlocation = document.querySelector("#steenbokvrouwen")
steenbokvrouwenbtnlocation.addEventListener("click", vrouwen)

const creditcardsbtnlocation = document.querySelector("#creditcards")
creditcardsbtnlocation.addEventListener("click", creditkeepers)

const meestemensentnlocation = document.querySelector("#meestemensen")
const gemiddeldeleeftijdbtnlocation = document.querySelector("#gemiddeldeleeftijd")
const matchmakingbtnlocation = document.querySelector("#matchmaking")
//buttonlocationarray.forEach(element => element.addEventListener('click', test))

