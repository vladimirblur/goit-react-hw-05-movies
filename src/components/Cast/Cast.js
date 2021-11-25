import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getMovieCast } from "../../services/movieApi";
import s from "./Cast.module.css";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(({ cast }) => setCast(cast));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {cast && (
        <ul className={s.castList}>
          {cast.map(({ cast_id, name, profile_path, character }) => (
            <li key={cast_id} className={s.item}>
              <img
                src={
                  profile_path &&
                  `https://image.tmdb.org/t/p/w185/${profile_path}`
                }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
// https://image.tmdb.org/t/p/w185/
