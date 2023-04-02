import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/pages/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  /*     {
        path: '/soon',
        name: 'Coming Soon',
        component: () => import('/src/pages/ComingSoon.vue'),
    } */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
