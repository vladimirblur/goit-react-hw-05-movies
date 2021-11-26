import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MoviesList({ movies }) {
  console.log(movies);
  return (
    <ul>
      {movies &&
        movies.results.map(({ id, original_title }) => (
          <li key={id}>
            <Link className="links" to={`/movies/${id}`}>
              {original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        original_title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
