import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");

  const handleAddCity = (e) => {
    e.preventDefault();

    const newCity = {
      name: name,
      country: country,
      population: population,
    };

    const oldCities = JSON.parse(localStorage.getItem("cities")) || [];

    const updatedCities = [...oldCities, newCity];

    localStorage.setItem("cities", JSON.stringify(updatedCities));

    navigate("/");
  };

  return (
    <div>
      <h2>Add City</h2>

      <form onSubmit={handleAddCity}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label>Population:</label>
        <input
          type="text"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
        />

        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;