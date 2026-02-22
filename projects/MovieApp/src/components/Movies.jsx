import MovieCard from "./MovieCard";
import "../styles/Movies.css"
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
function Movies() {

  const [movie, setMovie] = useState([]);
  const api_key = import.meta.env.VITE_TMDB_API_KEY;
  const base_url = "https://api.themoviedb.org/3";

  useEffect(() => {
    fetch(`${base_url}/movie/popular?api_key=${api_key}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovie(data.results);
      })
  }, [])
  return (
    <>
      <br /><br /><br /><br /><br />
      <div className="search-mobile">
        <input type="text" className="searchmobile" placeholder="search movies hear..." />

        <button className="searchbtn"><CiSearch className="logomobile" /></button>
      </div>

      <div className="displayMovie">
        {movie.map(mov => (
          <MovieCard movie={mov}></MovieCard>
        ))}
      </div>
    </>
  )
}
export default Movies;