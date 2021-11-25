import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MoviesList from "../../components/MoviesList";
import Section from "../../components/Section";
import { getTrendingMovies } from "../../services/movieApi";
import s from "./Homepage.module.css";

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
