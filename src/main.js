// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import VueCharts from 'vue-chartjs'
import HighchartsVue from 'highcharts-vue'
import Here from 'vue-here-maps'
Vue.use(HighchartsVue)
Vue.use(Here)
// import { Bar, Line } from 'vue-chartjs'

Vue.use(Vuetify)
Vue.use(VueCharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
