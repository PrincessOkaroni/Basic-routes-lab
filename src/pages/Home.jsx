import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Info goes here! */}
      </main>
    </>
  );
}

export default Home;
