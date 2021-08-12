import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export default {
    state: () => ({
        status: '',
        token: localStorage.getItem('token') ?? '',
        user: JSON.parse(localStorage.getItem('user')) ?? {}
    }),
    mutations: {
        auth_request(state) {
            state.status = 'loading';
        },
        auth_success(state, token, user) {
            state.status = 'success';
            state.token = token;
            state.user = user;
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
            state.token = '';
        },
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: `${process.env.VUE_APP_BACKEND_HOST}/api/auth/login`, data: user, method: 'POST' })
                    .then(resp => {
                        const { token, user } = resp.data;
                        localStorage.setItem('token', token)
                        localStorage.setItem('user', JSON.stringify(user))
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        reject(err)
                    })
            })
        },
        registration({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: `${process.env.VUE_APP_BACKEND_HOST}/api/auth/registration`, data: user, method: 'POST' })
                    .then(res => {
                        const { token, user } = res.data;
                        localStorage.setItem('token', token)
                        localStorage.setItem('user', JSON.stringify(user))
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        commit('auth_success', token, user)
                        resolve(res)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                axios({ url: `${process.env.VUE_APP_BACKEND_HOST}/api/auth/logout`, method: 'POST' })
                    .then(res => {
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        delete axios.defaults.headers.common['Authorization']
                        commit('logout')
                        resolve(res)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        reject(err)
                    })
            })
        }
    },
    getters: {
        isLogged: state => !!state.token,
        authStatus: state => state.status,
    }
}