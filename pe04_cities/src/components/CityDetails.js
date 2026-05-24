import { useParams } from "react-router-dom";

function CityDetails() {
  const { id } = useParams();

  const cities = JSON.parse(localStorage.getItem("cities")) || [];
  const city = cities[id];

  if (!city) {
    return <h2>City not found</h2>;
  }

  return (
    <div>
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
}

export default CityDetails;