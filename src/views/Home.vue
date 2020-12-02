<template>
  <div class="home">
    <div class="content">
    <movie-list/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line import/extensions
import MovieList from '@/components/MovieList.vue';

export default {
  name: 'Home',
  components: { MovieList },
};
</script>

<style scoped lang="scss">
  .home {
    background: linear-gradient(0deg, rgba(41,36,36,1) 0%, rgba(55,54,53,1) 100%);
  }

  .content {
    /*min-width: 320px;*/
    /*max-width: 1340px;*/
    /*margin: 0 auto;*/
    /*padding: 0 20px;*/
    /*border: 1px solid red;*/
  }
</style>
