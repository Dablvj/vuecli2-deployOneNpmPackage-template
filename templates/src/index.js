
import Test from './components/index.vue'

const components = {
  install(Vue){
    Vue.component('test',Test);
  }
};

export  default components;
