import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CitiesList from "./components/CitiesList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <h1>Cities Application</h1>

          <div className="nav-links">
            <Link to="/">Cities List</Link>
            <Link to="/add-city">Add City</Link>
          </div>
        </div>

        <div className="container">
          <Routes>
            <Route path="/" element={<CitiesList />} />
            <Route path="/add-city" element={<AddCity />} />
            <Route path="/city/:id" element={<CityDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;