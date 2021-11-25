import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getMovieReview } from "../../services/movieApi";
import s from "./Reviews.module.css";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  console.log(movieId);
  useEffect(() => {
    getMovieReview(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);
  console.log(reviews);

  return Boolean(reviews.length) ? (
    <ul className={s.reviews}>
      {reviews.map(({ author, id, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
}
