import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line no-unused-vars
import axios from 'axios' //dodato

//ZAKOMENTARISANO ISPOD ON KORISTI OVAJ KOD
// //load the token from the localStorage
// Vue.prototype.$http = axios; //dodato
// const token = localStorage.getItem("token"); //dodato
// //If htere is token then we will append default axios auth headers
// if(token){
//   Vue.prototye.$http.default.headers.common['Authorization'] = token;
// }

createApp(App).use(store).use(router).mount('#app')
