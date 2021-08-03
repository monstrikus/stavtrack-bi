import Vue from 'vue'
import VueRouter from 'vue-router';
import Dashboard from '@/views/dashboard/Dashboard';
import Graph from '@/views/graphs/Graph';
import Login from '@/views/auth/Login';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/graphs',
		name: 'Graphs',
		component: Graph
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	}
]

export default new VueRouter({
	mode: 'history',
	routes
})