// let getCountryInfo = async function () {
//     let result = await fetch("https://restcountries.com/v3.1/name/turkey")
//     let data = await result.json()
//     data.forEach(element => {
//         console.log(element.name);
//     });
// }
// getCountryInfo()

async function getCountryDetails(country) {
    let response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    let data = await response.json()
    let { name } = data[0]
    console.log(name.common);
}
getCountryDetails("usa")