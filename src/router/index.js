import Vue from "vue";
import VueRouter from "vue-router";
import Job from "../components/jobs/Job.vue";
import Login from "../components/account/Login.vue";
import Signup from "../components/account/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/jobs"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Signup
  },
  {
    path: "/jobs",
    name: "Job",
    component: Job
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
