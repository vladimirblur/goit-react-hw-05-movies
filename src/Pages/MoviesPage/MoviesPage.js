import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { getMovieByInput } from "../../services/movieApi";
import Section from "../../components/Section";
import MoviesList from "../../components/MoviesList";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const navigate = useNavigate();

  const handleInputchange = (e) => setQuery(e.target.value);

  useEffect(() => {
    if (!location.search) return;

    getMovieByInput(searchQuery).then(setMovies);
  }, [searchQuery]);

  const HandleSearchSubmit = (e) => {
    e.preventDefault();

    navigate({
      ...location,
      search: `query=${query}`,
    });

    setQuery("");
  };

  return (
    <Section>
      <form className={s.form} onSubmit={HandleSearchSubmit}>
        <input
          type="text"
          required
          placeholder="type to search movie"
          value={query}
          onChange={handleInputchange}
        />
        <button type="submit">Search</button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </Section>
  );
}
