const searchInput = document.querySelector("#search");
const searchBar = document.querySelector("#search-bar");
const countries = document.querySelector(".countries");


const getApi = async()=>{
    try{
        const res = await fetch("https://restcountries.com/v3.1/all")
        if(res.ok){
            console.log(res); //? Dogru calisiyor
            const data = await res.json() //? Json ladik
            console.log(data);
            // showData(data)
            selectBarOptions(data)
        }else{
            throw new Error(`Hata olustu: ${res.ststus}`)
        }
    }catch(error){
        console.log(error);
    }
}

getApi()



const countriesArr = []

const selectBarOptions = (country)=>{
    country.forEach((c)=> countriesArr.push(c.name.common))
    console.log(countriesArr);
}