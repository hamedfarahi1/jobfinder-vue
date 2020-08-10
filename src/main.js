import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken');
  if (to.fullPath === '/jobs') {
    if (!store.state.accessToken) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (store.state.accessToken) {
      next('/jobs');
    }
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
