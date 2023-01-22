import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Movie from "./components/Movie.js";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>영화</h1>
      {loading ? (
        <h2>Loding . . .</h2>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
