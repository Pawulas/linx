define([
  'vue'
], function(Vue) {
  'use strict';
  var template = [];

  template.push("<div>");
  template.push("<p>{{msg}}</p>");
  template.push("</div>");


  return Vue.component('about', {
    template: template.join(""),
    data: function() {
      return {
        msg: "componnent/about"
      }
    }
  });
  
});