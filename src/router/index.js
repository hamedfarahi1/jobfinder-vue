import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About";
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
    component: () => import("../components/jobs/Job")
  },
  {
    path: "/job/:id",
    component: ()  => import("../components/jobs/JobDetail"),
    props: true
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "**",
    component: () => import("../shared/templates/NotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
