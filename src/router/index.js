import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/services",
    name: "services",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServicesView.vue"),
  },
  {
    path: "/OutTeam",
    name: "OutTeam",
    component: () => import("../views/OutTeam.vue"),
  },
  {
    path: "/FAQs",
    name: "FAQs",
    component: () => import("../views/FAQs.vue"),
  },
  {
    path: "/solution",
    name: "solution",
    component: () => import("../views/Solution.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
