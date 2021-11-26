import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/movieApi";
import MoviesList from "../../components/MoviesList";
import Section from "../../components/Section";

const Homepage = () => {
  const [trendings, setTrendings] = useState(null);

  useEffect(() => {
    getTrendingMovies().then(setTrendings);
  }, []);

  return (
    <Section>
      <MoviesList movies={trendings} />
    </Section>
  );
};

export default Homepage;
