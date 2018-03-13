define([
  'vue',
  'vuex'
], function(Vue, Vuex) {
  'use strict';

  Vue.use(Vuex);

  return new Vuex.Store({
    state: {
      test: 'vuex test',
      activeComponent: 'home',
      subComponent: 'about'
    },
    mutations: {
      setComponent: function(state, payload) {
        state.subComponent = payload;
      }
    }
  });
});