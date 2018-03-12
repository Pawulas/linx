define(["./vue", './hello', './todo'], function(Vue) {
  
  var app = new Vue({
    el: "#app",
    template: `
    <div>
      <hello :parent-me="message"></hello>
      <input type="text" v-model="message" />
      <span :title="getTime()">
        lorem ipsum...
      </span>
      <todo v-bind="todo1"></todo>
    </div>
    `.trim(),
    data: {
      message: "simple message",
      todo1: {
        text: 'learn vue',
        isCompleted: false
      }
    },
    methods: {
      getTime: function() {
        return new Date().toLocaleString();
      }
    }
  })
});