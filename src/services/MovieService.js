import axios from 'axios';
import Movie from '../model/Movie';

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  withCredentials: false, // this is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const apiKey = process.env.VUE_APP_THE_MOVIE_DB_API_KEY;

function getPosterPath(url) {
  return `https://image.tmdb.org/t/p/original${url}`;
}

function toMovie(movieDbModel) {
  return new Movie(
    movieDbModel.id,
    movieDbModel.title,
    movieDbModel.overview,
    getPosterPath(movieDbModel.poster_path),
    movieDbModel.vote_average,
    movieDbModel.release_date,
  );
}

export default {
  getMovies() {
    return apiClient.get(`/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.data.results
        .map((movieDbModel) => toMovie(movieDbModel)));
  },
};
