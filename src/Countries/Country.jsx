import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const { name, flags, area, population, cca2 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="border">
      <p>Name: {name?.common}</p>
      <img className="img" src={flags?.png} alt="" />
      <p>Population:{population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca2}</small>
      </p>
      <button
        className="button-4"
        onClick={() => handleVisitedCountries(country)}
      >
        Marks as Visited
      </button>
      <button className="button-4" onClick={() => handleVisitedFlag(country)}>
        Add Visited Flag
      </button>
      <br />
      <button className="button-4" onClick={handleVisited}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited
        ? "I was visit this country"
        : "I'm going to visit this country "}
    </div>
  );
};

export default Country;
