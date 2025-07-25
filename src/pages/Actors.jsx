import NavBar from "./NavBar";

const actors = [
  { name: "Tom Holland", movies: ["Spider-Man", "Uncharted"] },
  { name: "Benedict Cumberbatch", movies: ["Doctor Strange", "Sherlock"] }
];

function Actors() {
  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;

