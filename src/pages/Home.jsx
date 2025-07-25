import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";

const movies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "Inception" },
  { id: 3, title: "The Matrix" }
];

function Home() {
  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;

