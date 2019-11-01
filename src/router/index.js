import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import PageNotFound_404 from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about-us",
    name: "about",
    component: About
  },
  {
    path: "/index.html",
    name: 

  },
  {
    path: "/about",
    redirect: { name: "about" }
  },
  {
    path: "*",
    component: PageNotFound_404
  }
];

const router = new VueRouter({
  routes
});

export default router;
