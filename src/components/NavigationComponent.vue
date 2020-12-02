<template>
  <div class="navigation">
    <nav class="navigation__wrapper">
      <ul class="navigation__list"
          data-cy="navigation-list">
        <li class="navigation__item navigation__item--active">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/movies">Movies</router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/shows">TV Shows</router-link>
         </li>
        <li class="navigation__item">
          <router-link to="/people">People</router-link>
        </li>
      </ul>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'NavigationComponent',
};
</script>

<style lang="scss" scoped>
.navigation {
  position: relative;
}

.navigation__list {
  display: flex;
  flex-direction: column;
  color: #ffffff;
  list-style-type: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;

  @media (min-width: $tablet-width) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
}

.navigation__item {
  padding: 15px;
  border-bottom: 1px solid #2c2c2c;

  &:first-child {
    border-top: 1px solid #2c2c2c;
  }

  &:hover {
    background-color: #373635;
  }

  @media (min-width: $tablet-width) {
    border-bottom: none;

    &:first-child {
      border-top: none;
    }
  }
}

.navigation__item--active {
  color: #CC2020;
}
</style>
