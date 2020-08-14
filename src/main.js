import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './core/store/store';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken');
  
  if (to.fullPath !== '/login' && to.fullPath !== '/register') {
    if (store.state.accessToken === null) {
      return next('/login');
    }
  }

  if(to.fullPath === from.fullPath)
    return
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
