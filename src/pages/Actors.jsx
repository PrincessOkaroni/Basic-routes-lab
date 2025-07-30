<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
=======
import NavBar from "./NavBar";

const actors = [
  { name: "Tom Holland", movies: ["Spider-Man", "Uncharted"] },
  { name: "Benedict Cumberbatch", movies: ["Doctor Strange", "Sherlock"] }
];
>>>>>>> 56544901c0080bc23ca8c8422b8859c2512617e7

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then(setActors);
  }, []);

  return (
    <>
      <header>
        <NavBar />
<<<<<<< HEAD
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
=======
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
>>>>>>> 56544901c0080bc23ca8c8422b8859c2512617e7
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;

