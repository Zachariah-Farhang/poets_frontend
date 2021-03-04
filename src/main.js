import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import reactStore from "./store/react";
import siteStore from "./store/site";
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import "./styles/main.scss";

try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');
  require('bootstrap');
  require('bootstrap-material-design/js/bootstrapMaterialDesign');
  window.axios = require('axios');
  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
} catch (e) {
  console.error(e);
}

window.reactStore = reactStore
window.siteStore = siteStore

createApp(App)
  .use(router)
  .use(PrimeVue,{ripple: true})
  .use(ToastService)
  .mount('#app')

