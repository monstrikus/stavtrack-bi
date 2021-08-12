import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './auth-module';
import biData from './bi-data';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { authModule, biData }
});