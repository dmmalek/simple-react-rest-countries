import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Country Length:{countries.length}</h1>
      {countries.map((country) => (
        <Country key={country.cca2} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
