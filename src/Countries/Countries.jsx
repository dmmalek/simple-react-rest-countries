import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("add country");
    console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Country Length:{countries.length}</h1>
      <div>
        <p>visited country length :{visitedCountries.length}</p>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca2}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {countries.map((country) => (
        <Country
          handleVisitedCountries={handleVisitedCountries}
          key={country.cca2}
          country={country}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
