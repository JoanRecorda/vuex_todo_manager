import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { createApp } from "vue";

const app = createApp({
  // root instance definition
});

app.mount("#app");
app.use(VueAxios, axios)

import App from './App.vue'
import store from './store'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
