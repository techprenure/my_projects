import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSkeletonLoader from 'skeleton-loader-vue'
Vue.component('vue-skeleton-loader', VueSkeletonLoader)


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueSkeletonLoader)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
