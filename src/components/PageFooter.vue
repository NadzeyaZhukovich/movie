<template>
  <footer class="footer container">
    <div class="footer__logo">
      <img src="../assets/images/clapperboard.png" width="50" height="50">
    </div>
    <p class="footer__copyright">Copyright &copy; {{date.getFullYear()}} Movies page</p>

  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: $tablet-width) {
    padding: 30px;
  }
}
</style>
