import Vue from 'vue'
import App from './App.vue'

import eventBus from './plugins/event-bus'

import './scss/main.scss'

Vue.use(eventBus)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')