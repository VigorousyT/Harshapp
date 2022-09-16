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
      <h2>{country.name}</h2>
      <h2>{country.capital}</h2>
      <img src={country.flag} width="300px" alt="" />
    </div>
  );
}

export default Countryinfo;
