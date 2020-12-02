import Vue from 'vue';
import Vuex from 'vuex';
import * as movies from '../store/modules/movies';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movies,
  },
});
