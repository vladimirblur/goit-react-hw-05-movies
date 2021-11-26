import { useState, useEffect } from "react";
import { getMovieDetails } from "../../services/movieApi";
import { useLocation, useNavigate, useParams, Outlet } from "react-router";
import MovieCard from "../../components/movieCard";
import Section from "../../components/Section";

export default function MovieDetailsPage() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const { movieId } = params;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <Section>
      <button
        className="button button__back"
        type="button"
        onClick={() => navigate(location?.state?.from ?? "/")}
      >
        Go to Homepage
      </button>

      {movie && <MovieCard movie={movie} />}

      <Outlet />
    </Section>
  );
}
