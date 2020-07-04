import React,{useEffect,useState} from "react";
import {NativeSelect,FormControl} from "@material-ui/core";
import Styles from "./country.module.css";
import {fetchCountry} from "../../api";
const Country=({handleCountryChange})=>{
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchApiCountries=async ()=>{
            setFetchedCountries(await fetchCountry());
        }
        fetchApiCountries();
    },[setFetchedCountries]);

    return(
        <FormControl className={Styles.fromControl}>
            <NativeSelect defaultValue="" onChange={(event)=>handleCountryChange(event.target.value)} className={Styles.MuiNativeSelectSelect}>
                <option value="">Global</option>
                {fetchedCountries.countries?fetchedCountries.countries
                    .map((country,index)=>(<option  key={index} value={country.name}>{country.name}</option>)):null}
            </NativeSelect>
        </FormControl>
    )
}


export default Country;