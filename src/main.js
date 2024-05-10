import { createApp,ref  } from 'vue';
import App from './App.vue';
import router from './router'; 
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import axios from "axios";
import VueCookies from 'vue-cookies';

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // API-аас өгөгдөл авахад 401 байвал дахин нэвтрүүлэх
  if (error.response.status === 401) {
      console.log(error.response.data)
      //store.dispatch('logout')
      //router.push('/login')
      logout();
  }
  return Promise.reject(error)
});


const app = createApp(App);
// app.use(store);
app.use(router);
app.use(VueCookies);
app.use(ToastPlugin, {
  duration: 2000,
  position: 'bottom-right'
});
// app.use(AOS);
// GetStudInfo();
app.mount('#app');

export function logout() {
  localStorage.removeItem('expires_in');
  localStorage.removeItem('loggin');
  router.push({ path: "/" });
}