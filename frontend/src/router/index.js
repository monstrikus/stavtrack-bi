import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/dashboard/Dashboard';
import Graph from '@/views/graphs/Graph';
import Auth from '@/views/auth/Auth';
import Login from '@/views/auth/components/Login';
import Registration from '@/views/auth/components/Registration';
import LayoutApp from '@/views/layout/Layout'
import store from '../store/index'
import error from '@/views/404/404'
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '*',
			name: 'Error',
			component: error,
		},
		{
			path: '/auth',
			name: 'Auth',
			component: Auth,
			children: [{ path: 'login', component: Login, name: 'Login' }, { path: 'registration', component: Registration, name: 'Registration' }]
		},
		{
			path: '/app',
			component: LayoutApp,
			meta: {
				auth: true
			},
			children: [{ path: 'dashboard', component: Dashboard }, { path: 'graph', component: Graph }]
		},
	]
})

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some(record => record.meta.auth)) {
// 		if (store.getters.isLoggedIn) {
// 			next()
// 			return
// 		}
// 		next('/auth/login')
// 	} else {
// 		next()
// 	}
// })


router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.auth)) {
		if (store.getters.isLogged) {
			if (to.path === '/') {
				next('/app/dashboard')
				return
			} else {
				next()
				return
			}
		}
		next('/auth/login')
	} else {
		if (store.getters.isLogged) {
			if (to.path === '/auth/login' || to.path === '/auth/registration') {
				next('/app/dashboard')
				return
			}
		} else {
			next()
		}
	}
})
export default router;