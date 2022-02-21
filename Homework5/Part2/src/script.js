//get countries by the currency they use
let getCountryByCurrency = async currency => {
    let response = await fetch(`https://restcountries.com/v3.1/currency/${currency}`)
    let dataArr = await response.json()
    console.log(dataArr)
    console.log(dataArr.length)
}

//get the country by the capital city
let getCountryByCapital = async capital => {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/capital/${capital}`)
        let dataArr = await response.json()
        return dataArr[0]
    } catch (error) {
        console.log(error)
        return false
    }
}

// handle all of the requirements
const mainFunction = async () =>{
    try {
        let country = await getCountryByCapital('tallinn')
        let firstCurrency = country.currencies[Object.keys(country.currencies)[0]]
        console.log(firstCurrency)
        getCountryByCurrency(firstCurrency.name.toLowerCase())
    } catch (error) {
        console.log(error)
    }
}


mainFunction()