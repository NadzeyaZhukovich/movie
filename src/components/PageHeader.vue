<template>
  <header class="header container">
    <div class="header__wrapper">
      <div class="header__logo">
        <img src="../assets/images/clapperboard.png" width="50" height="50">
      </div>
      <button class="header__nav-trigger" @click="closeMenu = !closeMenu">
        <burger-menu class="header__nav-trigger-icon"
                     v-if="!closeMenu"/>
        <close-menu class="header__nav-trigger-icon"
                    v-else/>
      </button>
    </div>
    <navigation-component class="header__nav"
                          :class="{openMenu: closeMenu}"/>
  </header>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue';
import closeMenu from '@/assets/icons/close-outline.svg';
import burgerMenu from '@/assets/icons/menu-outline.svg';

export default {
  name: 'PageHeader',
  components: { NavigationComponent, closeMenu, burgerMenu },
  data() {
    return {
      closeMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;

  @media (min-width: $tablet-width) {
    display: flex;
    align-items: center;
    padding: 30px;
  }
}

.header__wrapper {
  display: flex;
  align-items: center;
  padding: 20px;

  @media (min-width: $tablet-width) {
    padding: 0;
  }
}

.header__nav-trigger {
  position: absolute;
  right: 20px;
  top: 24px;
  background-color: transparent;
  border: none;
  padding: 5px;

  &:hover {
    .header__nav-trigger-icon{
      color: #8e8e8e;
    }
  }

  @media (min-width: $tablet-width) {
    display: none;
  }
}

.header__nav-trigger-icon {
  width: 35px;
  height: 35px;
  color: #ffffff;
}

.header__nav {
  display: none;
  position: absolute;
  z-index: 999;
  width: 100%;
  background: linear-gradient(0deg, rgba(41,36,36,1) 0%, rgba(55,54,53,1) 100%);

  @media (min-width: $tablet-width) {
    display: block;
    position: relative;
    background: transparent;
  }
}

.openMenu {
  display: block;
}
</style>
