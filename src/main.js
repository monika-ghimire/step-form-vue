import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import vSelect from "vue-select";
import 'element-ui/lib/theme-chalk/index.css';




Vue.component("v-select", vSelect);
Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

