import PropTypes from "prop-types";

function Movie({coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt="title"/>
      <h2>{title}</h2>
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
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string), 
}

export default Movie