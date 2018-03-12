define(["./vue"], function(Vue) {
  return Vue.component('todo', {
    props: ['text', 'isCompleted'],
    template: `
    <div>
      <h2>text: {{text}}</h2>
      <h4>completed: {{isCompleted}}</h4>
    </div>`.trim()
  });
});