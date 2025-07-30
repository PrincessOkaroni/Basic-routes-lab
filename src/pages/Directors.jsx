<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
=======
import NavBar from "./NavBar";

const directors = [
  { name: "Christopher Nolan", movies: ["Inception", "Interstellar"] },
  { name: "Sam Raimi", movies: ["Spider-Man", "Doctor Strange"] }
];
>>>>>>> 56544901c0080bc23ca8c8422b8859c2512617e7

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then(setDirectors);
  }, []);

  return (
    <>
      <header>
        <NavBar />
<<<<<<< HEAD
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
=======
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, i) => (
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

export default Directors;

