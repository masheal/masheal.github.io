import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'
import { store } from './store/store'

Vue.use(VueRouter)

// axios default URL
axios.defaults.baseURL = 'https://wd5122471827bdpsca.wilddogio.com/'

// set Vue prototype(axios can be used in any Vue template)
Vue.prototype.http = axios

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})