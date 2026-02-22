import { useEffect, useState } from "react";
import "../styles/MovieCard.css"
function MovieCard({ movie }) {
  const relaseyear = movie.release_date.split("-")[0];


  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [fav, setfav] = useState(true);


  function setfavfun() {
    if (fav == false) {
      setfav(true);
    } else {
      setfav(false);
    }

  }


  return (
    <>
      <div className="movieCardContainer">

        <div className="imgContainer">
          <div className="heart" onClick={setfavfun}>{fav ? "🤍" : "❤️"}</div>


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