import { useEffect, useState } from "react";
import "../styles/MovieCard.css"
function MovieCard({ movie }) {
  const relaseyear = movie.release_date.split("-")[0];


  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const [demo, setDemo] = useState([]);
  function handle() {
    const movObj = {
      title: movie.title,
      release_date: relaseyear,
    }
    setDemo([...demo, movObj]);
  }

  console.log(demo);

  return (
    <>
      <div className="movieCardContainer">

        <div className="imgContainer">
          <div className="heart" onClick={handle}>🤍</div>
          <img src={imageUrl} alt="movie image" />
        </div>
        <div className="title">
          {movie.title}
        </div>
        <div className="releaseDate">
          {relaseyear}
        </div>

      </div>
    </>
  )
}






export default MovieCard;