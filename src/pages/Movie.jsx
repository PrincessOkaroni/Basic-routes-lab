import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const movies = [
  { id: "1", title: "Doctor Strange", time: "115 mins", genres: ["Action", "Adventure"] },
  { id: "2", title: "Inception", time: "148 mins", genres: ["Sci-Fi", "Thriller"] }
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) return <p>Movie not found</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;

