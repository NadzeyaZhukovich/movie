import MovieService from "../../services/MovieService";

export const namespaced = true;

export const state = {
  movies: [],
}

export const mutations = {
  ADD_MOVIES(state, movies) {
    state.movies = movies;
  },
}

export const actions = {
  fetchMovies({ commit }) {
    return MovieService.getMovies()
      .then(response => {
        commit('ADD_MOVIES', response);
        console.log('response123 =>', response);
      });
  },
}
