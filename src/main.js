// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import plugin from "./plugin";

Vue.config.productionTip = false

Vue.use(VueVirtualScroller)
Vue.use(plugin)
Vue.component('RecycleScroller', VueVirtualScroller.RecycleScroller)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
