import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.results.map(({ id, original_title }) => (
          <li key={id}>
            <Link
              className="links"
              to={`/movies/${id}`}
              state={{ from: location }}
            >
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
