import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading . . .</h2>
      ) : (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <br />
          <div>
            <img src={movie.large_cover_image} />
            <h4>{movie.summary}</h4>
            {movie.genres.map((genres) => (
              <ul>
                <li key={genres}>{genres}</li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
