const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=efdd64a15fb96982639549d347daad59";

async function fetchWithErrorHandling(url = "") {
  const response = await fetch(url);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function getTrendingMovies() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?${API_KEY}`);
}

export function getMovieDetails(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?${API_KEY}`);
}

export function getMovieCast(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/credits?${API_KEY}`);
}

export function getMovieReview(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/reviews?${API_KEY}`);
}

export function getMovieByInput(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie/?${API_KEY}&query=${query}`
  );
}
