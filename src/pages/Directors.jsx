import NavBar from "./NavBar";

const directors = [
  { name: "Christopher Nolan", movies: ["Inception", "Interstellar"] },
  { name: "Sam Raimi", movies: ["Spider-Man", "Doctor Strange"] }
];

function Directors() {
  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;

