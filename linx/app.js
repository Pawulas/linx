require.config({
  paths: {
    vue: '../lib/vue/vue',
    vueRouter: '../lib/vue/vue-router'
  }
});


define([
  'vue',
  'router/router'
], function(Vue, router) {
  'use strict';

  var template = [];

  template.push("<div>")
  template.push("<p>TEST</p>")
  template.push("<router-link to='/home'>Home</router-link>");
  template.push("<router-link to='/about'>About</router-link>");
  template.push("<router-view></router-view>");
  template.push("</div>")

  var v = new Vue({
    el: '#app',
    template: template.join(""),
    router: router
  });
  
});