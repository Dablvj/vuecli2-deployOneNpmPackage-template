import Vue from 'vue'
import App from './App.vue'
import Component from './index.js'
Vue.use(Component);

new Vue({
  el: '#app',
  render: h => h(App)
})
