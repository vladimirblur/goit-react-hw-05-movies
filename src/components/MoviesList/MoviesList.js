import { Link } from "react-router-dom";

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies &&
        movies.results.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
    </ul>
  );
}
