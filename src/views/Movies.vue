<template>
  <div data-cy="page-movie-title">
    <movie-list/>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList';

export default {
  name: 'Movies',
  components: { MovieList },
};
</script>
