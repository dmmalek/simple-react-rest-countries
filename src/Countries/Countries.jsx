import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./Countries.css";
import { addToLs, getItemCart } from "../storage";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);
  const [cart, setCart] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    addToLs(country.name.common);
  };
  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      const storeCart = getItemCart();
      console.log(storeCart);
      setCart(storeCart);
    }
  }, [countries]);
  return (
    <div>
      <h1>Country Length:{countries.length}</h1>
      <div>
        <p>visited country length :{cart.length}</p>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca2}>{country.name.common}</li>
          ))}
        </ul>

        <div>
          {visitedFlag.map((flag) => (
            <img
              className="img"
              key={flag.cca2}
              src={flag.flags.png}
              alt={flag.name.common}
            />
          ))}
        </div>
      </div>
      <div className="flex">
        {countries.map((country) => (
          <Country
            handleVisitedFlag={handleVisitedFlag}
            handleVisitedCountries={handleVisitedCountries}
            key={country.cca2}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
