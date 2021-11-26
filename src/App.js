import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container";
import "./App.css";

const Homepage = lazy(() =>
  import("./Pages/Homepage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./Pages/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Pages/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const Reviews = lazy(() =>
  import("./components/Reviews" /* webpackChunkName: "reviews" */)
);
const Cast = lazy(() =>
  import("./components/Cast" /* webpackChunkName: "cast" */)
);

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/movies" element={<MoviesPage />} />

            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />

              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
