define(["./vue"], function(Vue) {

  return Vue.component('hello', {
    props: ['parentMe'],
    data: function() {
      return {
        message: "Hello from component"
      }
    },
    template: `
    <div>
      <h1>{{message}}</h1>
      <span>COMPONENT / {{parentMe}}</span>
    </div>
    `.trim()
  });

});