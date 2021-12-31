import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nation from "./components/Nation";
import { getCountries, getData } from "./api/index";
import Data from "./components/Data";

function App() {

  const [countries, setCountries] = useState([]);
  const [countriesSelected, setCountriesSelected] = useState();
  const [dataNewest, setDataNewest] = useState({Confirmed: 0, Active: 0, Deaths: 0});
  
    useEffect(() => {
        getCountries().then((res) => {
            setCountries(res.data)
            
        })
    },[]);

    useEffect(() => {
      if(countriesSelected) {
        getData(countriesSelected.Slug).then((res) => {
          const data = res.data;
          const length = data.length;
          if(data[length - 2]) {
            setDataNewest(data[length - 2])
          }
        })

      }
    },[countriesSelected, setDataNewest])

  return (
    <>
      <Header/>
      <Nation countries={countries} setCountriesSelected={setCountriesSelected}/>
      <Data dataNewest={dataNewest}/>
    </>
  );
}

export default App;
