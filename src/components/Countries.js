import axios from "axios";
import React, {useState, useEffect} from "react";
import Country from "./Country";

const Countries = () => {

    const [search, setSearch] = useState("");
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [error, setError] = useState("")

    useEffect(()=> {
        axios.get("https://countries.tech-savvy.tech/countries")
            .then((response)=> {
                setCountries(response.data)
            })
            .catch((error)=> {
                setError(error.message);
            })
    }, countries)
    return (
        <div>
            <input type="text" value={search} onChange={(e)=> { 
                var filterCountries = countries.filter(country=> country.name.common.indexOf(e.target.value) != -1)
                setSearch(e.target.value)
                setFilteredCountries(filterCountries)
            }} />
            {filteredCountries.length > 0 &&

                filteredCountries.map((country)=> 
                    <Country name={country.name.common} />
                )
            }
        </div>
    );
}

export default Countries;
