<template>
  <div class="movie-cart">
    <div class="movie-cart__wrapper"
         @mouseover="active = true"
         @mouseleave="active = false"
         :style="{'background-image': 'url(' + movie.poster + ')' }">
<!--      <div class="movie-cart__info movie-cart__info&#45;&#45;age"-->
<!--           data-cy="movie-cart-age">{{movie.age}}</div>-->
<!--      <div class="movie-cart__info movie-cart__info&#45;&#45;type"-->
<!--           data-cy="movie-cart-type">{{movie.type}}</div>-->
      <div class="movie-cart__info movie-cart__info--ratings"
           data-cy="movie-cart-ratings">{{movie.rating}}</div>
      <transition name="active">
        <div class="movie-cart__details"
             data-cy="movie-cart-details"
             v-if="active">
          <h3 class="movie-cart__title"
              data-cy="movie-cart-title">{{movie.title}}</h3>
<!--          <p class="movie-cart__overview">{{movie.overview}}</p>-->
          <span class="movie-cart__year"
                data-cy="movie-cart-year"> Release {{movie.releaseDate}}</span>
        </div>
      </transition>
    </div>
    <div class="movie-cart__movie-title"
         data-cy="movie-cart-movie-title">{{movie.title}}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MovieCart',
  data() {
    return {
      active: false,
    };
  },
  props: {
    movie: Object,
  },
};
</script>

<style scoped lang="scss">
.movie-cart {
  width: 260px;
  height: fit-content;
  margin: 0 3px 20px 3px;
  box-shadow: 0 2px 6px rgba(0,0,0,.1), 0 4px 4px rgba(0,0,0,.25);
  border-radius: 3px;

  @media (min-width: $tablet-width) {
    margin: 0 5px 20px;
    width: 193px;
  }
}

.movie-cart__wrapper {
  width: 100%;
  height: 360px;
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 3px;

  @media (min-width: $tablet-width) {
    height: 300px;
  }
}

.movie-cart__info {
  width: fit-content;
  padding: 3px 7px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 977;
  right: 0;
  font-size: 12px;

  @media (min-width: $tablet-width) {
    padding: 5px 15px;
    font-size: 14px;
  }

  &--age {
    top: 0
  }

  &--ratings {
    bottom: 0;
    background-color: #CC2020;
  }

  &--type {
    bottom: 0;
    left: 0;
  }
}

.movie-cart__details {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  padding: 25px 10px;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: $tablet-width) {
    padding: 35px 20px;
  }
}

.active-enter-active, .active-leave-active {
  transition: opacity .5s;
}
.active-enter, .active-leave-to {
  opacity: 0;
}

.movie-cart__title {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;

  @media (min-width: $tablet-width) {
    margin-bottom: 15px;
  }
}

.movie-cart__overview {
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 15px;

  @media (min-width: $tablet-width) {
    line-height: 20px;
    font-size: 16px;
  }
}

.movie-cart__year {
  font-size: 16px;
  font-weight: 500;
}

.movie-cart__movie-title {
  margin: 5px 0;
  padding: 0 5px;
  text-transform: capitalize;
  text-align: center;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: $tablet-width) {
    /*font-size: 20px;*/
    margin: 10px 0;
    /*min-height: 66px;*/
  }
}
</style>
