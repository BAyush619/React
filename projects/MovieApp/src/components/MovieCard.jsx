import { useEffect, useState } from "react";
import "../styles/MovieCard.css"
function MovieCard({ movie }) {
  const relaseyear = movie.release_date.split("-")[0];


  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [fav, setfav] = useState(true);
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  function setfavfun() {
    if (fav == false) {
      setfav(true);
    } else {
      setfav(false);

    }

    // const movieObj = {
    //   title: movie.title,
    //   release_date: relaseyear,
    //   poster_path: imageUrl
    // };
    // setFavouriteMovies(prev => {
    //   const newFav = [...prev, movieObj];
    //   console.log("Added to favourites:", movieObj);
    //   console.log("Current favourites array:", newFav);
    //   return newFav;
    // });
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