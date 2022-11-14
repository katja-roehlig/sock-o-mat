import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateView from "../views/CreateView.vue";
import OverView from "../views/OverView.vue";
import DetailView from "../views/DetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateView,
  },
  {
    path: "/overview",
    name: "overview",
    component: OverView,
  },

  {
    path: "/detail/:id",
    name: "detail",
    component: DetailView,
  },
  /*{
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ //"../views/AboutView.vue"),
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
