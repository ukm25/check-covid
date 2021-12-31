import axios from "axios"

export const getCountries = () => {
    return axios.get(`https://api.covid19api.com/countries`);
}

export const getData = (slug) => {
    
    return slug ? axios.get(`https://api.covid19api.com/dayone/country/${slug}`) : null;
}