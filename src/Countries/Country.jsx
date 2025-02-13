const Country = ({ country }) => {
  const { name, area } = country;
  return (
    <div>
      <p>Name: {name?.common}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
