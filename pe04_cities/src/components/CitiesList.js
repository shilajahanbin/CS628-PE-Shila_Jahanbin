import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CitiesList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem("cities")) || [];
    setCities(savedCities);
  }, []);

  return (
    <div>
      <h2>Cities List</h2>

      {cities.map((city, index) => (
        <div key={index}>
          <Link to={`/city/${index}`}>{city.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default CitiesList;