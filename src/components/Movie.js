import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImage, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie_image} src={coverImage} alt="title"/>
      <h2 className={styles.movie_title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h4>소개</h4>
      <p>{summary}</p>
      <h4>장르</h4>
      <ul>
        {genres.map((genres) => (
          <li key={genres}>{genres}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string), 
}

export default Movie