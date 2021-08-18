import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.prototype.$http = axios;
if (localStorage.getItem('token')) Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
Vue.config.productionTip = false

new Vue({
	router,
	vuetify,
	store,
	render: h => h(App)
}).$mount('#app')