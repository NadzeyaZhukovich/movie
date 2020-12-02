<template>
  <div class="movie-list container"
       data-cy="movie-list">
    <MovieCart
      v-for="(movie, index) in movies.movies"
      :key="index"
      :movie="movie"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MovieCart from './MovieCart.vue';

export default {
  name: 'MovieList',
  components: { MovieCart },
  created() {
    store.dispatch('movies/fetchMovies');
  },

  computed: {
    ...mapState(['movies']),

  },
};
</script>

<style scoped lang="scss">
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;

    @media (min-width: 1240px) {
      justify-content: left;
      padding: 30px;
    }
  }
</style>
