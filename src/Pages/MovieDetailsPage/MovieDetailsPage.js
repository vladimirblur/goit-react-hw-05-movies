import { useState, useEffect } from "react";
import { getMovieDetails } from "../../services/movieApi";
import { useParams, Outlet } from "react-router";
import MovieCard from "../../components/movieCard";
import Section from "../../components/Section";

export default function MovieDetailsPage() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const { movieId } = params;

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <Section>
      {movie && <MovieCard movie={movie} />}

      <Outlet />
    </Section>
  );
}
