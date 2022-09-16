import React from "react";
import { Link, Outlet } from "react-router-dom";

//---------single Page Application---------//
function Countries() {
  const [countries, setcountries] = React.useState([]);
  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setcountries(data));
  }, []);
  return (
    <div className="Newtod">
      <h1 className="tod">COUNTRIES</h1>
      <div className="d-flex">
        <div className="w-50">
          <ul>
            {countries &&
              countries.map((c, i) => {
                return (
                  <li key={i}>
                    <Link to={`/Countries/${c.alpha2Code}`}>{c.name}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="w-50">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
  //----------Single Page Application--------//
}

export default Countries;
