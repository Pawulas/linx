define([
  'vue',
  'vueRouter',
  '../components/home',
  '../components/about'
], function(Vue, VueRouter, home, about) {
  'use strict';

  Vue.use(VueRouter);

  return new VueRouter({
    routes: [
      {
        path: '/home',
        name: 'Home',
        component: home
      },
      {
        path: '/about',
        name: 'About',
        component: about
      }
    ]
  })
  
});