import { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const { name, flags, area, population, cca2 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div>
      <p>Name: {name?.common}</p>
      <img src={flags?.png} alt="" />
      <p>Population:{population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca2}</small>
      </p>
      <button onClick={() => handleVisitedCountries(country)}>
        Marks as Visited
      </button>
      <button onClick={() => handleVisitedFlag(country)}>
        Mark as Visited Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited
        ? "I was visit this country"
        : "I'm going to visit this country "}
    </div>
  );
};

export default Country;
