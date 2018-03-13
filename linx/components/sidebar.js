define([
  'vue',
], function(Vue) {
  'use strict';
  var template = [];

  template.push("<div>");
  template.push("<p>{{msg}}</p>");
  template.push("<button v-on:click='about' >About</button>");
  template.push("<button v-on:click='history'>History</button>");
  template.push("</div>");

  return Vue.component('sidebar', {
    template: template.join(""),
    data: function() {
      return {
        msg: 'component/sidebar'
      }
    },
    methods: {
      about: function() {
        this.$store.commit('setComponent','about');
      },
      history: function() {
        this.$store.commit('setComponent','history'); 
      }
    }
  });
});