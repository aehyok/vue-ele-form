import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 测试一个提交
Vue.use(ElementUI, {
  size: 'medium',
})
new Vue({
  render: h => h(App),
}).$mount('#app')
