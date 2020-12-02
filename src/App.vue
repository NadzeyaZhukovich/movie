<template>
  <div id="app">
    <page-header/>
    <filter-list/>
    <router-view/>
    <page-footer/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
<script>
  import PageHeader from '@/components/PageHeader.vue';
  import PageFooter from '@/components/PageFooter.vue';
  import FilterList from '@/components/FilterList.vue';

  export default {
    components: { FilterList, PageFooter, PageHeader },
  };
</script>
