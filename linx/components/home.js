define([
  'vue',
  './about',
  './sidebar',
  './history'
], function(Vue) {
  'use strict';
  var template = [];

  template.push("<div>");
  template.push(" <div class='sidebar'>");
  template.push("   <sidebar></sidebar>");
  template.push(" </div>");
  template.push(" <div class='content-page'>");
  template.push("   <component :is='currentComponent'></component>");
  template.push(" </div>");
  template.push("</div>");

  return Vue.component('home', {
    template: template.join(""),
    data: function() {
      return {
        msg: "componnent/home",
      }
    },
    computed: {
      currentComponent: function() {
        return this.$store.state.subComponent;
      }
    }
  });
});