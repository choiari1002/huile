import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// bootstrap 5.x npm import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// bootstrap-vue import
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 유효성 체크 라이브러리 : vee-validate (Vue 전용)
import VeeValidate from 'vee-validate';

// bootstrap-vue 모듈 사용
Vue.use(BootstrapVue)

Vue.use(VeeValidate);

Vue.config.productionTip = false

import "@/fontAwesomeIcon.js"; // fontAwesomeIcon.js 불러옴

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
