<template>
  <div class="filter-list">
    <div class="filter-list__wrapper container">
      <filter-component class="filter-list__movie-type"/>
    </div>

    <div class="filter-list__wrapper">
      <div class="filter-list__button"

           ref="filterToggle">
        <filter-icon class="filter-list__icon"
                     @click="openFilterList = !openFilterList"/>
      </div>
      <div class="filter-list__configurations"
           v-if="openFilterList"
           ref="filters">
        <filter-component class="filter-list__configurations-item"/>
        <filter-component class="filter-list__configurations-item"/>
        <filter-component class="filter-list__configurations-item"/>
        <filter-component class="filter-list__configurations-item"/>
      </div>
    </div>

  </div>

</template>

<script>
import FilterIcon from '../assets/icons/funnel-outline.svg?inline';
import FilterComponent from './FilterComponent.vue';

export default {
  name: 'FilterList',
  components: { FilterIcon, FilterComponent },
  data() {
    return {
      openFilterList: false,
    };
  },
  // methods: {
  //   closeClickHandler(e) {
  //     if ( this.$refs.filters !== undefined && this.$refs.filters.contains(e.target)) {
  //       this.openFilterList = false;
  //       this.removeClickCloseHandler();
  //     } else {
  //       if ( !this.$refs.filterToggle.contains(e.target) ) {
  //         this.openFilterList = !this.openFilterList;
  //         this.removeClickCloseHandler();
  //       }
  //     }
  //   },
  //
  //   addClickCloseHandler() {
  //     document
  //       .body
  //       .addEventListener("click", this.closeClickHandler);
  //   },
  //
  //   removeClickCloseHandler() {
  //     document
  //       .body
  //       .removeEventListener("click", this.closeClickHandler);
  //   }
  // },
  // watch: {
  //   openFilterList(newValue) {
  //     if (newValue) {
  //       this.addClickCloseHandler();
  //     }
  //   }
  // }
};
</script>

<style scoped lang="scss">
  .filter-list {
    padding: 50px 0;
    background-color: #000000;
  }

.filter-list__wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.filter-list__movie-type {
  width: 150px;
}

.filter-list__button {
  text-align: right;
}

.filter-list__icon {
  width: 20px;
  height: 20px;

  path {
    stroke: #CC2020;
  }
}

.filter-list__wrapper {
  width: 250px;
  position: relative;
}

.filter-list__configurations {
  position: absolute;
  width: 100%;
  z-index: 9999;
  background-color: #373635;
}

.filter-list__configurations-item {
  &:hover {
    background-color: #2c2c2c;
  }
}
</style>
