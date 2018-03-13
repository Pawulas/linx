require.config({
  paths: {
    vue: '../lib/vue/vue',
    vuex: '../lib/vue/vuex'
  }
});

define([
  'vue',
  'vuex',
  'store/store',
  'components/home'
], function(Vue, Vuex, store) {
  'use strict';

  var template = [];

  template.push("<div id='wrapper'>")
  template.push("<component :is='activeComponent'></component>");
  template.push("</div>")

  var v = new Vue({
    el: '#app',
    template: template.join(""),
    store: store,
    computed: {
      test: function() {
        return this.$store.state.test;
      },
      activeComponent: function() {
        return this.$store.state.activeComponent;
      }
    }
  });
  
});