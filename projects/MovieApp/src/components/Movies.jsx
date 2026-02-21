import MovieCard from "./MovieCard";
import "../styles/Movies.css"
function Movies() {
  const movie = [
    {
      image: "#",
      title: "terminator",
      releaseDate: "2010",
    },
    {
      image: "#",
      title: "jawan",
      releaseDate: "2023",
    },
    {
      image: "#",
      title: "dark",
      releaseDate: "2002",
    },

    {
      image: "#",
      title: "terminator",
      releaseDate: "2010",
    },
    {
      image: "#",
      title: "jawan",
      releaseDate: "2023",
    },
    {
      image: "#",
      title: "dark",
      releaseDate: "2002",
    }, {
      image: "#",
      title: "terminator",
      releaseDate: "2010",
    },
    {
      image: "#",
      title: "jawan",
      releaseDate: "2023",
    },
    {
      image: "#",
      title: "dark",
      releaseDate: "2002",
    }, {
      image: "#",
      title: "terminator",
      releaseDate: "2010",
    },
    {
      image: "#",
      title: "jawan",
      releaseDate: "2023",
    },
    {
      image: "#",
      title: "dark",
      releaseDate: "2002",
    },

  ]
  return (
    <>
      <div className="displayMovie">
        {movie.map(mov => (
          <MovieCard movie={mov}></MovieCard>
        ))}
      </div>
    </>
  )
}
export default Movies;