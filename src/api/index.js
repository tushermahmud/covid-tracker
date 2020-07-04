import axios from "axios";
const url="https://covid19.mathdro.id/api";
export const fetchData=async (country)=>{
    let changeAbleUrl=url;
    if(country){
        changeAbleUrl=`${url}/countries/${country}`;
    }
    try{
        const {data}=await axios.get(changeAbleUrl);
        const globalData={
            confirmed:data.confirmed.value,
            recovered:data.recovered.value,
            deaths:data.deaths.value,
            lastUpdate:data.lastUpdate
        }
        return globalData;
    }catch(err){
        console.log(err);
    }
}
export const fetchDailyData=async ()=>{
    try{
        const {data}=await axios.get("https://covid19.mathdro.id/api/daily");
        return data;
    }catch(error){
        console.log(error);
    }
}
export const fetchCountry=async ()=>{
    try{
        const fetchCountries=await axios.get("https://covid19.mathdro.id/api/countries");
        return fetchCountries.data;

    }catch (error) {
        console.log(error);
    }
}
export const fetchSpecificCountryData=async (country)=>{
    try{
        const countryData=await axios.get(`${url}/countries/${country}`);
        return countryData;

    }catch (error) {
        console.log(error);
    }
}
