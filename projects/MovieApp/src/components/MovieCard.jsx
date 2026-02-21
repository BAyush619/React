import "../styles/MovieCard.css"
function MovieCard({ movie }) {
  return (
    <>
      <div className="movieCardContainer">
        <div className="imgContainer">
          <img src={movie.image} alt="movie image" />
        </div>
        <div className="title">
          {movie.title}
        </div>
        <div className="releadeDate">
          {movie.releaseDate}
        </div>
      </div>
    </>
  )
}
export default MovieCard;