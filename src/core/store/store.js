import Vue from 'vue'
import Vuex from 'vuex'
import { accountService } from '../services/account/accountService'
import router from '../../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: null,
    loggingIn: false,
    loginError: null,
    registering: false,
    registerError: null
  },
  mutations: {
    loginStart: state => state.loggingIn = true,
    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },
    registerStart: state => state.registering = true,
    registerStop: (state, errorMessage) => {
      state.registering = false;
      state.registerError = errorMessage;
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.accessToken = null;
    }
  },
  actions: {
    doLogin({ commit }, loginData) {
      commit('loginStart');

      accountService.login(loginData)
        .then(response => {
          commit('loginStop', null);
          commit('updateAccessToken', response);
          router.push('/jobs');
        })
        .catch(error => {
          commit('loginStop', error);
          commit('updateAccessToken', null);
        })
      },
      doRegister({ commit }, regData) {
        commit('registerStart');
  
        accountService.register(regData)
          .then(response => {
            commit('registerStop', null);
            commit('updateAccessToken', response);
            router.push('/jobs');
          })
          .catch(error => {
            commit('registerStop', error);
            commit('updateAccessToken', null);
          })
        },
      fetchAccessToken({ commit }) {
        commit('updateAccessToken', localStorage.getItem('accessToken'));
      },
      logout({ commit }) {
        localStorage.removeItem('accessToken');
        commit('logout');
        router.push('/login');
      }
  }
})