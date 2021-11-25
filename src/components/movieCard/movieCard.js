import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import s from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
      <article className={s.card}>
        <img
          className=""
          src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt={movie.title}
          width="342"
          height="513"
        />
        <div className={s.about}>
          <h1 className={s.movieTitle}>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </h1>
          <p>Users score: {movie.vote_average}</p>
          <p>
            <b>Overview:</b>
          </p>
          <p className={s.overview}>{movie.overview}</p>
          <p>
            <b>Genres:</b>
          </p>
          <p>{movie.genres.reduce((acc, { name }) => `${acc} ${name}`, "")}</p>
        </div>
      </article>

      <div className={s.additional}>
        <p>Additional information:</p>
        <ul className={s.additionalLinks}>
          <li>
            <Link className={s.additionalLink} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `reviews`,
                // state: { from },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}