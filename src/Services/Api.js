import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '9b39931418d434655f10fcb806f4d8c7';

export const fetchTrendingMovies = async () => {
  const result = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return result.data;
};

export const fetchMovieBySearch = async query => {
  const result = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return result.data.results;
};
export const fetchMovieById = async id => {
  const result = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return result.data;
};
export const fetchReviews = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results;
};
export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};
