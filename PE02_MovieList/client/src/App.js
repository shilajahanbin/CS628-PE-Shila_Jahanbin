import React, { useState } from 'react';
import './App.css';

function MovieList() {
  const [movies] = useState([
    { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
    { title: 'The Godfather', genre: 'Crime', releaseYear: 1972 },
    { title: 'Titanic', genre: 'Romance', releaseYear: 1997 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014 },
    { title: 'La La Land', genre: 'Musical', releaseYear: 2016 }
  ]);

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <div className="container">
      <h1>Movie List</h1>

      <label htmlFor="genre-select">Filter by Genre: </label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return <MovieList />;
}

export default App;