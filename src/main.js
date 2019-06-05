import Vue from 'vue'
import VueRouter from 'vue-router'

import eventBus from './plugins/event-bus'
import routes from './routes'

import App from './App.vue'
import './scss/main.scss'

Vue.use(VueRouter)
Vue.use(eventBus)

const router = new VueRouter({
    routes,
    mode: 'history',
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')