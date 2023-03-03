import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  ElementTiptapPlugin  from 'element-tiptap';
// import this package's styles
import 'element-tiptap/lib/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
// use ElementUI's plugin
Vue.use(ElementTiptapPlugin, {
  lang: 'zh',
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
