<template>
  <div class="filter">
    <div class="filter__option-selected"
         @click="openSelector = !openSelector"
         ref="filterSelector">
      <span class="filter__option-text">
        Hello!
      </span>
      <toggle-array class="filter__icon"/>
    </div>
    <div class="filter__options-list"
         v-if="openSelector"
         ref="filterList">
      <span class="filter__option"
          v-for="(option, index) in options"
          :key="index" >
        {{option.text}}
      </span>
    </div>

  </div>
</template>

<script>
import ToggleArray from '../assets/icons/caret-down-outline.svg?inline';

export default {
  name: 'FilterComponent',
  components: { ToggleArray },
  data() {
    return {
      openSelector: false,
      options: [
        { text: 'A', value: 'A' },
        { text: 'B', value: 'B' },
        { text: 'C', value: 'C' },
        { text: 'D', value: 'D' },
      ],
    };
  },
  methods: {
    closeClickHandler(e) {
      if (this.$refs.filterList !== undefined && this.$refs.filterList.contains(e.target)) {
        this.openSelector = false;
        this.removeClickCloseHandler();
      } else if (!this.$refs.filterSelector.contains(e.target)) {
        this.openSelector = !this.openSelector;
        this.removeClickCloseHandler();
      }
    },

    addClickCloseHandler() {
      document
        .body
        .addEventListener('click', this.closeClickHandler);
    },

    removeClickCloseHandler() {
      document
        .body
        .removeEventListener('click', this.closeClickHandler);
    },
  },
  watch: {
    openSelector(newValue) {
      if (newValue) {
        this.addClickCloseHandler();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
  width: 100%;
  color: #ffffff;
  position: relative;
  border: 1px solid #292424;
}

.filter__option-selected {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.filter__option-text {
  color: #ffffff;
}

.filter__icon {
  width: 15px;
  height: 15px;

  path {
    fill: #CC2020;
  }
}

.filter__options-list {
  position: absolute;
  left: -1px;
  z-index: 9999;
  width: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  border: 1px solid #292424;
  background-color: #373635;
}

.filter__option {
  text-align: left;
  padding: 5px;
  box-shadow: 0 1px 0 #292424;

  &:last-child {
    box-shadow: none;
  }

  &:hover {
    background-color: #2c2c2c;
  }
}

</style>
