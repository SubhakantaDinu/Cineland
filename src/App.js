import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
//a693c865
const API_URL = "http://www.omdbapi.com?apikey=a693c865";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Iron");
  const searchMovies = async (title) => {
    const response = await fetch(API_URL + "&s=" + title);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>World CineLand</h1>
      {/* <h4>Suno na Dinu CineLand</h4> */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" onClick={() => searchMovies(searchTerm)}>
          Search
        </button>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>  
  );
};
export default App;
