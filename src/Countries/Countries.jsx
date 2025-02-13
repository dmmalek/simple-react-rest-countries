import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlag = (country) => {
    console.log("visited flag");
    const newVisitedFlag = [...visitedFlag, country];
    setVisitedFlag(newVisitedFlag);
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

        <div>
          {visitedFlag.map((flag) => (
            <img key={flag.cca2} src={flag.flags.png} alt={flag.name.common} />
          ))}
        </div>
      </div>

      {countries.map((country) => (
        <Country
          handleVisitedFlag={handleVisitedFlag}
          handleVisitedCountries={handleVisitedCountries}
          key={country.cca2}
          country={country}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
