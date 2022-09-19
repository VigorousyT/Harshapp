import React from "react";
import { useParams } from "react-router-dom";

function Countryinfo() {
  var states = useParams();
  const [country, setcountry] = React.useState({});
  React.useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${states.z}`)
      .then((res) => res.json())
      .then((data) => setcountry(data));
  }, [states]);
  return (
    <div>
      <h3>Country:- {country.name}</h3>
      <h3>Capital:- {country.capital}</h3>
      <h3>Region:- {country.subregion}</h3>
      <h4>Launguage Spoken:- {country.nativeName}</h4>
      <h4>Population:- {country.population}</h4>
      <img src={country.flag} width="300px" alt="" />
    </div>
  );
}

export default Countryinfo;
