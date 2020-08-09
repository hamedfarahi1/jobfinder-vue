import Vue from "vue";
import Main from "./components/Main.vue"
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Main },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount("#app");
console.log(app)
